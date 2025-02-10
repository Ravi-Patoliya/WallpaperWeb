const CACHE_NAME = "pwa-cache-v2";
const URLS_TO_CACHE = [
  "/", // Add the necessary routes/files to cache
  "/favicon.ico",
  "/manifest.json",
  "/anipix-icon-192x192.png",
  "/anipix-icon-512x512.png",
  // "./app/globals.css", // Tailwind CSS file (if local)
  // "https://cdn.jsdelivr.net/npm/tailwindcss@3.2.4/dist/tailwind.min.css",
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
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      return fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone()); // Cache the response
          return response;
        });
      });
    }).catch(() => {
      // Optional fallback for offline mode
      if (event.request.url.endsWith(".html")) {
        return caches.match("/offline.html");
      }
    })
  );
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
