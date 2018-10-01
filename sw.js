/*Resubmission*/

self.addEventListener('fetch', function (event) {
  event.waitUntil(
    caches.open('rest-static').then(function(cache){
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'js/main.js',
        'data/restaurants.json'
      ]);
    })
  );
});



self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) return response;
        return fetch(event.request);
      })
    );
  });


/*self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request, {ignoreSearch: true}).then(function (db_response) {
        //Returns repsonse if cache is found
        if (db_response && db_response.type !== "undefined") {
            console.log("found in db: ", event.request);
            return db_response;
        }

        return fetch(event.request).then(function (response) {
            console.log("made a fetch");
            let responseToCache = response.clone();

            caches
                .open(reviewCache)
                .then(function (cache) {
                    cache.put(event.request, responseToCache);
                })
            return response;
        })
    }));
}); */
