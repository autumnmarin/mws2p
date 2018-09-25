/*Resubmission*/

self.addEventListener('fetch', function (event) {
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
});

