'use strict';

var petClinic = petClinic || {};

petClinic.controller('vetList', function ($scope, vetService) {
    $scope.listFailure = false;

    vetService.findAll(function (err, vets) {
        $scope.listFalure = false;
        if (err) {
            $scope.listFalure = false;
        } else {
            $scope.vets = vets;
        }
    });
});