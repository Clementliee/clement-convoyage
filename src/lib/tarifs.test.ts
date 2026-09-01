import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { computeQuote, OPTIONS, type QuoteInput } from "./tarifs.ts";

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
    pack: "aucun",
    kitBienvenue: false,
    formula: "aucun",
    mission: "convoyage",
    jockeySens: "rapatriement",
    jockeyPoint: "",
    jockeyRef: "",
    jockeyAller: "",
    jockeyRetour: "",
    jockeyCt: false,
    jockeyWash: "aucun",
    ...over,
  };
}

describe("OPTIONS.protocolePrestige", () => {
  it("is 150 and replaces securite", () => {
    assert.equal(OPTIONS.protocolePrestige, 150);
    assert.equal("securite" in OPTIONS, false);
  });
});

describe("computeQuote protocole prestige", () => {
  it("adds 150 € as an option, not on the base", () => {
    const off = computeQuote(baseInput());
    const on = computeQuote(baseInput({ protocolePrestige: true }));
    assert.equal(off.ok, true);
    assert.equal(on.ok, true);
    assert.equal(on.base, off.base);
    assert.equal(on.options - off.options, OPTIONS.protocolePrestige);
    assert.equal(on.total - off.total, OPTIONS.protocolePrestige);
  });

  it("applies +20 % prestige on the base only", () => {
    const vp = computeQuote(baseInput({ vehicle: "vp" }));
    const prestige = computeQuote(baseInput({ vehicle: "prestige" }));
    assert.equal(prestige.base, Math.round(vp.base * (1 + OPTIONS.prestigePct)));
    assert.equal(prestige.options, vp.options);
  });

  it("stacks +20 % base and 150 € protocol", () => {
    const vp = computeQuote(baseInput({ vehicle: "vp" }));
    const both = computeQuote(baseInput({ vehicle: "prestige", protocolePrestige: true }));
    assert.equal(both.base, Math.round(vp.base * (1 + OPTIONS.prestigePct)));
    assert.equal(both.options, vp.options + OPTIONS.protocolePrestige);
  });

  it("keeps protocol additional on Signature pack (GPS product already included)", () => {
    const pack = computeQuote(baseInput({ pack: "premium", gps: true }));
    const withProtocol = computeQuote(
      baseInput({ pack: "premium", gps: true, protocolePrestige: true }),
    );
    assert.equal(pack.options, OPTIONS.packPremium);
    assert.equal(withProtocol.options, OPTIONS.packPremium + OPTIONS.protocolePrestige);
  });

  it("does not bill GPS 199 € twice when Signature is packed", () => {
    const packedGps = computeQuote(baseInput({ pack: "premium", gps: true }));
    const packedNoGpsFlag = computeQuote(baseInput({ pack: "premium", gps: false }));
    assert.equal(packedGps.options, packedNoGpsFlag.options);
    assert.equal(packedGps.options, OPTIONS.packPremium);
  });

  it("can stack GPS 199 € product and protocol 150 € à la carte", () => {
    const both = computeQuote(baseInput({ gps: true, protocolePrestige: true }));
    assert.equal(both.options, OPTIONS.gps + OPTIONS.protocolePrestige);
  });

  it("does not add protocol on jockey missions", () => {
    const jockey = computeQuote(
      baseInput({
        mission: "jockey",
        from: "Quimper",
        jockeyPoint: "Gare de Quimper",
        protocolePrestige: true,
      }),
    );
    assert.equal(jockey.ok, true);
    assert.equal(jockey.options, 0);
  });
});
