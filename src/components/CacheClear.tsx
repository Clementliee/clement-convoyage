import { useEffect } from "react";

/** Désinscrit d’anciens caches / service workers qui affichent encore l’ancienne version. */
export function CacheClear() {
  useEffect(() => {
    if (typeof navigator === "undefined") return;
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
  }, []);
  return null;
}
