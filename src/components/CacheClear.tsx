import { useEffect } from "react";

const REV = "cbzh-m3";

/** Désinscrit d’anciens caches / service workers qui affichent encore l’ancienne version. */
export function CacheClear() {
  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const prev = typeof localStorage !== "undefined" ? localStorage.getItem("cbzh.rev") : null;
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((r) => {
          void r.unregister();
        });
      });
    }
    if (typeof caches !== "undefined") {
      void caches.keys().then((keys) => {
        keys.forEach((k) => {
          void caches.delete(k);
        });
      });
    }
    if (typeof localStorage !== "undefined" && prev !== REV) {
      localStorage.setItem("cbzh.rev", REV);
    }
  }, []);
  return null;
}
