const CACHE_NAME = "pwa-cache-v1";
const URLS_TO_CACHE = [
  "/", // Add the necessary routes/files to cache
  "/favicon.ico",
  "/manifest.json",
  "/anipix-icon-192x192.png",
  "/anipix-icon-512x512.png",
];

// Install the service worker and cache static files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  console.log("[Service Worker] Installed and caching static files.");
});

// Fetch and update cache
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) {
    // Handle API data caching
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => caches.match(event.request)) // Serve from cache if offline
    );
  } else {
    // Serve cached static files
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

// Activate and remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
