'use strict';

var petClinic = petClinic || {};

petClinic.controller('ownerDetails', function ($scope, $location, $routeParams, ownerService) {
    ownerService.find($routeParams.id, function (err, owner) {
        if (err) {
            console.log(JSON.stringify(err));
        } else {
            $scope.owner = owner;
        }
    });

    $scope.edit = function (owner) {
        $location.url('/owner/update/' + owner._id);
    };
});