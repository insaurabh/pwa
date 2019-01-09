self.addEventListener('install', function(event) {
    console.log("[Service Worker] Installing service Worker .....");
});

self.addEventListener('activate', function(event) {
    console.log("[Service Worker] Activating service Worker .....");

    return self.clients.claim();
});

/**
 * event.respondWith() : allow us to repsonse to current fetch,override the data that we can sendback
 */
self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something....');
    console.log(event.request);
    // event.respondWith('/help/');
})

































