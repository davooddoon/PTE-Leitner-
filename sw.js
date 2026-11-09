/* PTE Core service worker: offline support */
var CACHE = 'pte-core-v3';
var ASSETS = ['./', './index.html', './manifest.json', './xlsx.full.min.js', './pte_words.xlsx',
  './icons/icon-192.png', './icons/icon-512.png', './icons/favicon.svg'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Network first, cache as fallback (so updates on GitHub show up when online) */
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  e.respondWith(
    fetch(r).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(r, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(r).then(function (hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});
