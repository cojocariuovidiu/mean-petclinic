'use strict';

var petClinic = petClinic || {};

petClinic.controller('ownerUpdate', function ($scope, $location, $routeParams, ownerService) {
    $scope.updateSuccess = false;
    $scope.updateFailure = false;
    $scope.updateFailureMsg = null;

    ownerService.find($routeParams.id, function (err, owner) {
        if (err) {
            console.log(JSON.stringify(err));
        } else {
            $scope.owner = owner;
        }
    });

    $scope.update = function (owner, ownerForm) {
        $scope.updateSuccess = false;
        $scope.updateFailure = false;
        $scope.updateFailureMsg = null;

        if (ownerForm.$valid) {
            ownerService.update(owner, function (err) {
                if (err) {
                    $scope.updateFailureMsg = err.message;
                    $scope.updateFailure = true;
                } else {
                    $scope.updateSuccess = true;
                }
            });
        }
    };

    $scope.cancel = function (owner) {
        $location.url('/owner/details/' + owner._id);
    };
});