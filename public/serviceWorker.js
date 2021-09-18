// Not 100% sure what the code is doing, Im still new to service workers,
//  but I know it is setting up the offline caching and telling the worker
//  what to do with the data.
//https://medium.com/swlh/converting-existing-react-app-to-pwa-3c7e4e773db3


// From The Website:
//  "We need to define a callback for the install event and choose what to cache.
//  Inside the callback, we have to open a cache, cache the files, and get 
//  confirmation that assets are cached"
let CACHE_NAME = 'kibble-up';
const urlsToCache = [
    '.',
    '/index.html'
];
self.addEventListener('install', function(e) {
    // Perform install steps
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

//what to do with the cached files
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response) {
            return response;
        }
        return fetch(event.request);
        })
    );
});