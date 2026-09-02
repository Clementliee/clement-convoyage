import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  applyPack,
  computeQuote,
  defaultQuoteInput,
  ECONOMICS,
  OPTIONS,
  packPrice,
  priceExamples,
  type QuoteInput,
} from "./tarifs.ts";

function baseInput(over: Partial<QuoteInput> = {}): QuoteInput {
  return {
    from: "Quimper",
    to: "Rennes",
    zone: "france",
    vehicle: "vp",
    when: "standard",
    lavage: "aucun",
    rechargeVe: false,
    gps: false,
    protocolePrestige: false,
    plein: false,
    controleVisuel: false,
    coffret: "aucun",
    pack: "essentiel",
    kitBienvenue: false,
    formula: "aucun",
    mission: "convoyage",
    clientKind: "part",
    tripMode: "aller",
    jockeySens: "rapatriement",
    jockeyPoint: "",
    jockeyRef: "",
    jockeyAller: "",
    jockeyRetour: "",
    jockeyCt: false,
    jockeyAttente: false,
    jockeyWash: "aucun",
    ...over,
  };
}

describe("Quimper → Rennes vs Driiveme chauffeur pro 220 € HT", () => {
  it("stays competitive around 219 € for aller simple, pack Route", () => {
    const q = computeQuote(baseInput());
    assert.equal(q.ok, true);
    assert.equal(q.prixApproche, 0);
    assert.ok(q.prixRetour > 0, "retour chauffeur must be billed on aller simple");
    assert.ok(q.total >= 199 && q.total <= 239, `got ${q.total}`);
    assert.equal(q.options, 0);
    assert.equal(q.netApresUrssaf, Math.round(q.total * (1 - ECONOMICS.urssaf)));
  });

  it("adds approche when the pickup is Vannes", () => {
    const fromBase = computeQuote(baseInput());
    const fromVannes = computeQuote(baseInput({ from: "Vannes", to: "Rennes" }));
    assert.ok(fromVannes.prixApproche > 0);
    assert.ok(fromVannes.kmApproche > 80);
    assert.equal(Math.round(fromVannes.kmApproche * ECONOMICS.approcheEurKm), fromVannes.prixApproche);
    assert.ok(fromVannes.total >= fromBase.total - 20, "same workday, not dumped");
  });

  it("drops chauffeur return and bills the second vehicle at 78 %", () => {
    const aller = computeQuote(baseInput({ tripMode: "aller" }));
    const round = computeQuote(baseInput({ tripMode: "retourVehicule" }));
    assert.equal(round.ok, true);
    assert.equal(Math.round(aller.prixTrajet * ECONOMICS.retourVehiculeCoeff), round.prixRetour);
    assert.ok(round.total > aller.total, "two vehicles cost more than one");
    assert.ok(round.total < aller.total * 1.7, "round trip cheaper than two one-ways");
  });

  it("does not bill chauffeur return when destination is Quimper", () => {
    const q = computeQuote(baseInput({ from: "Rennes", to: "Quimper" }));
    assert.equal(q.prixRetour, 0);
    assert.ok(q.prixApproche > 0, "approche Rennes from Quimper");
  });
});

describe("packs particulier vs professionnel", () => {
  it("exposes three distinct pack prices per client", () => {
    assert.equal(packPrice("part", "essentiel"), 0);
    assert.equal(packPrice("part", "confort"), OPTIONS.packPartSerenite);
    assert.equal(packPrice("part", "premium"), OPTIONS.packPartSecurise);
    assert.equal(packPrice("pro", "essentiel"), 0);
    assert.equal(packPrice("pro", "confort"), OPTIONS.packProLivraison);
    assert.equal(packPrice("pro", "premium"), OPTIONS.packProSignature);
    assert.notEqual(packPrice("part", "confort"), packPrice("pro", "confort"));
  });

  it("adds pack amount on top of the trip, never à la carte extras", () => {
    const route = computeQuote(baseInput({ pack: "essentiel" }));
    const serenite = computeQuote(baseInput({ pack: "confort", plein: true, lavage: "complet" }));
    assert.equal(serenite.options, OPTIONS.packPartSerenite);
    assert.equal(serenite.total - route.total, OPTIONS.packPartSerenite);
    assert.equal(serenite.base, route.base);
  });

  it("applies pro Signature without double-billing GPS product", () => {
    const packed = computeQuote(applyPack(baseInput({ clientKind: "pro" }), "premium"));
    assert.equal(packed.options, OPTIONS.packProSignature);
  });
});

describe("vehicle and urgency", () => {
  it("applies +20 % prestige on the trip components only", () => {
    const vp = computeQuote(baseInput({ vehicle: "vp" }));
    const prestige = computeQuote(baseInput({ vehicle: "prestige" }));
    assert.equal(prestige.prixTrajet, Math.round(vp.prixTrajet * (1 + OPTIONS.prestigePct)));
    assert.equal(prestige.options, vp.options);
  });

  it("applies +25 % urgent on trip, approche and return, not on the pack", () => {
    const std = computeQuote(baseInput({ pack: "confort" }));
    const urg = computeQuote(baseInput({ pack: "confort", when: "urgent" }));
    assert.equal(urg.options, std.options);
    assert.equal(urg.base, Math.round(std.prixTrajet * 1.25) + Math.round(std.prixApproche * 1.25) + Math.round(std.prixRetour * 1.25));
  });
});

describe("jockey conciergerie keeps à la carte", () => {
  it("adds CT, wait and wash on top of the forfait", () => {
    const bare = computeQuote(
      baseInput({
        mission: "jockey",
        from: "Quimper",
        jockeyPoint: "Gare de Quimper",
      }),
    );
    const extra = computeQuote(
      baseInput({
        mission: "jockey",
        from: "Quimper",
        jockeyPoint: "Gare de Quimper",
        jockeyCt: true,
        jockeyAttente: true,
        jockeyWash: "standard",
      }),
    );
    assert.equal(bare.ok, true);
    assert.equal(extra.options, OPTIONS.jockeyCt + OPTIONS.jockeyAttente + OPTIONS.jockeyLavage);
    assert.equal(extra.total - bare.total, extra.options);
  });
});

describe("public price examples", () => {
  it("matches the quote engine for Quimper → Rennes Pack Route", () => {
    const rows = priceExamples();
    const rennes = rows.find((r) => r.from === "Quimper" && r.to === "Rennes");
    const engine = computeQuote(defaultQuoteInput());
    assert.ok(rennes);
    assert.equal(rennes.total, engine.total);
    assert.ok(rennes.total >= 199 && rennes.total <= 239);
    const vannes = rows.find((r) => r.from === "Vannes" && r.to === "Rennes");
    assert.ok(vannes);
    assert.ok(vannes.approche > 0);
  });
});
