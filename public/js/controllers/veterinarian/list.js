'use strict';

var petClinic = petClinic || {};

petClinic.controller('vetList', function ($scope, vetService) {
    vetService.findAll(function (err, vets) {
        $scope.listFalure = false;
        if (err) {
            $scope.listFalure = true;
        } else {
            $scope.vets = vets;
        }
    });

    $scope.listFailure = false;
    $scope.sortOrder = 'lastName';
    $scope.searchTerm = '';

    $scope.search = function (searchTerm) {
        $scope.searchTerm = searchTerm;
    };

    $scope.sort = function (sortBy) {
        if ($scope.sortOrder === sortBy) {
            $scope.sortOrder = '-' + sortBy;
        } else {
            $scope.sortOrder = sortBy;
        }
    }
});