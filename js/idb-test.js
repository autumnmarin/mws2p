console.log('hey its me idb-test.js')

import idb from 'idb';

idb.open('test-db', 1, function(upgradeDb){
  var keyValStore = upgradeDb.createObjectStore('keyval');
});
