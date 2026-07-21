// BK Pochette Congo — Service Worker
// L'appli elle-même (index.html) est toujours récupérée sur le réseau en priorité,
// pour que tu voies immédiatement chaque mise à jour poussée sur GitHub, sans devoir
// changer CACHE à la main. Le cache sert uniquement de secours hors connexion.
// Les icônes/manifest, qui changent rarement, restent en cache classique.
const CACHE = "bk-pochette-v11";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Une requête de navigation = ouverture de l'appli elle-même.
function isAppShell(request) {
  return request.mode === "navigate" || request.url.endsWith("/index.html") || request.url.endsWith("/");
}

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;

  if (isAppShell(e.request)) {
    // Réseau en priorité : toujours la dernière version déployée sur GitHub.
    // Le cache ne sert que si le téléphone est hors connexion.
    e.respondWith(
      fetch(e.request)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE).then((c) => { try { c.put(e.request, copy); } catch (_) {} });
          return resp;
        })
        .catch(() => caches.match(e.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  // Icônes, manifest, polices… : cache en priorité, comme avant (changent rarement).
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE).then((c) => { try { c.put(e.request, copy); } catch (_) {} });
          return resp;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
