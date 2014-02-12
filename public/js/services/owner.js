'use strict';

var petClinic = petClinic || {};

petClinic.factory('ownerService', function ($http) {
    var owners = [];

    return {
        search: function (search, callback) {
            var url = '/owner/search/' + search.term + '/' + search.context;
            $http({method: 'GET', url: url})
                .success(function (data, status, headers, config) {
                    owners = data;
                    callback(null, data);
                })
                .error(function (err, status, headers, config) {
                    callback(err, null);
                });
        },
        create: function (owner, callback) {
            $http({method: 'POST', url: '/owner', data: owner})
                .success(function (data, status, headers, config) {
                    callback(null, data);
                })
                .error(function (err, status, headers, config) {
                    callback(err, null);
                });
        },
        getOwners: function () {
            return owners;
        }
    };
});