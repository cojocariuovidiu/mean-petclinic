'use strict';

var petClinic = petClinic || {};

petClinic.factory('cacheService', function ($cacheFactory) {

    console.log('new cache...');
    var cache = $cacheFactory('petclinic');

    return {
        get: function (key) {
            return cache.get(key);
        },
        put: function (key, value) {
            cache.put(key, value);
        }
    };
});