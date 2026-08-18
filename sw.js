// Trend Estilistas Service Worker
const CACHE_NAME = 'trend-app-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through fetch handler allowing standard online navigation & caching capabilities
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
