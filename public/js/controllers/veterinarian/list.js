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
    }

    $scope.sortByName = function () {
        if ($scope.sortOrder === 'lastName') {
            $scope.sortOrder = '-lastName';
        } else {
            $scope.sortOrder = 'lastName';
        }
    };

    $scope.sortBySpecialty = function () {
        if ($scope.sortOrder === 'specialty.name') {
            $scope.sortOrder = '-specialty.name';
        } else {
            $scope.sortOrder = 'specialty.name';
        }
    };
});