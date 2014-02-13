var petClinic = petClinic || {};

petClinic.controller('ownerDetails', function ($scope, $location, $routeParams, ownerService) {
    'use strict';

    ownerService.find($routeParams.id, function (err, owner) {
        if (err) {
            console.log(JSON.stringify(err));
        } else {
            $scope.owner = owner;
        }
    });
});