'use strict';

var petClinic = petClinic || {};

petClinic.controller('ownerSearch', function ($scope, $location, cacheService, ownerService) {
    $scope.searchFailure = false;
    $scope.sortOrder = '-lastName';
    $scope.owners = cacheService.get('owners');

    $scope.search = function (owner) {
        $scope.searchFailure = false;

        if (owner === undefined) {
            ownerService.findAll(function (err, owners) {
                if (err) {
                    $scope.searchFailure = true;
                } else {
                    cacheService.put('owners', owners);
                    $location.url('/owner/list');
                }
            });
        } else {
            ownerService.search({term: 'lastName', context: owner.lastName}, function (err, owners) {
                if (err) {
                    $scope.searchFailure = true;
                } else {
                    cacheService.put('owners', owners);
                    $location.url('/owner/list');
                }
            });
        }
    };

    $scope.sort = function (sortBy) {
        if ($scope.sortOrder === sortBy) {
            $scope.sortOrder = '-' + sortBy;
        } else {
            $scope.sortOrder = sortBy;
        }
    };
});