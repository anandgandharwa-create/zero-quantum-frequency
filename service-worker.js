const CACHE_NAME = "zqf-cache-v2";

const urlsToCache = [
  "/zero-quantum-frequency/",
  "/zero-quantum-frequency/index.html",
  "/zero-quantum-frequency/manifest.json",
  "/zero-quantum-frequency/icon-192.png",
  "/zero-quantum-frequency/icon-512.png",
  "/zero-quantum-frequency/mindos.html"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// FETCH (offline support)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});
