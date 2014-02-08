'use strict';

petClinic.controller('owners', function ($scope) {

    $scope.lastName;

    $scope.findByLastName = function () {
        console.log('searching...');
    };
});