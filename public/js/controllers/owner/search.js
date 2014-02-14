'use strict';

var petClinic = petClinic || {};

petClinic.controller('ownerSearch', function ($scope, $location, cacheService, ownerService) {
    $scope.searchFailure = false;
    $scope.sortOrder = '-lastName';
    $scope.owners = cacheService.get('owners');

    $scope.search = function (owner, searchForm) {
        $scope.searchFailure = false;
        if (searchForm.$valid) {
            ownerService.search({term: 'lastName', context: owner.lastName}, function (err) {
                if (err) {
                    $scope.searchFailure = true;
                } else {
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