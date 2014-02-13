'use strict';

var petClinic = petClinic || {};

petClinic.factory('vetService', function ($http) {
    return {
        findAll: function (callback) {
            $http({method: 'GET', url: '/vet/list'})
                .success(function (data, status, headers, config) {
                    callback(null, data);
                })
                .error(function (err, status, headers, config) {
                    callback(err, null);
                });
        }
    };
});