'use strict';

var petClinic = petClinic || {};

petClinic.factory('cacheService', function ($cacheFactory) {
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