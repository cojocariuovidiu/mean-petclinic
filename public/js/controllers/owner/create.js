var petClinic = petClinic || {};

petClinic.controller('ownerCreate', function ($scope, ownerService) {
    'use strict';

    $scope.createSuccess = false;
    $scope.createFailure = false;
    $scope.createFailureMsg = null;

    $scope.create = function (owner, ownerForm) {
        $scope.createSuccess = false;
        $scope.createFailure = false;
        $scope.createFailureMsg = null;

        if (ownerForm.$valid) {
            ownerService.create(owner, function (err, _owner) {
                if (err) {
                    $scope.createFailureMsg = err.message;
                    $scope.createFailure = true;
                } else {
                    $scope.createSuccess = true;
                    ownerForm.$setPristine(true);
                    $scope.owner = {};
                }
            });
        }
    };
});