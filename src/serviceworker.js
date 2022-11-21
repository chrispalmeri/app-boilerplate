// serviceworker.js

// what if network returns 304 not modified, netlify does that
// should be fine https://github.com/w3c/ServiceWorker/issues/412
// fetch should do like your browser does and magically convert it to a 200

const CACHE_NAME = 'v0.0.0';
const FILES_TO_CACHE = [
	// just missing favicon.ico (and apple-touch?)
	'./',
	'index.html',
	'css/default.css',
	'js/bundle.js', // FIXME this doesn't work with 'npm run local', only mock
	'app.webmanifest',
	'img/android-chrome-192x192.png',
	'img/android-chrome-512x512.png'
];

// happens whenever serviceworker.js has changed
// add all the files to cache that are needed before activating
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(FILES_TO_CACHE);
		})
	);
});

// happens on next visit after install, after all tabs are closed
// remove any old caches with different names
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

// if there's a cached version available, use it
// and also fetch from network and update cache for next time
// otherwise just use network
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(CACHE_NAME)
		.then(function (cache) {
			// https://stackoverflow.com/questions/42813582/service-worker-cache-matchrequest-returns-undefined
			// also lines up with https://github.com/jakearchibald/trained-to-thrill/blob/master/src/js/sw/index.js
			return cache.match(event.request, {ignoreVary: true})
			.then(function (response) {
				var fetchPromise = fetch(event.request)
				.then(function (networkResponse) {
					// only update cache if it was in the cache already
					// and if the response is good
					//if (event.request.method === 'GET') { // probably not necessary
					// correct POST won't match https://web.dev/cache-api-quick-guide/#retrieving
					if (response && networkResponse.ok) {
						cache.put(event.request, networkResponse.clone());
					}
					return networkResponse;
				})
				.catch(function(error) {
					// probably should include content in case it is an actual page
					// not sure about content type
					// this seems reasonable though for example favicon.ico
					return new Response(null, {
						'status': 503,
						'statusText': 'Service Unavailable'
					});
					//return caches.match('/offline.html');
				});
				return response || fetchPromise;
			});
		})
	);
});
