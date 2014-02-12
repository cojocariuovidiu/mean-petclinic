var petClinic = petClinic || {};

petClinic.controller('owners', function ($scope, $location, ownerService) {
    'use strict';

    $scope.createSuccess = false;
    $scope.createFailure = false;
    $scope.createFailureMsg = null;
    $scope.searchFailure = false;
    $scope.owners = ownerService.getOwners();

    $scope.search = function (owner, searchForm) {
        $scope.searchFailure = false;
        if (searchForm.$valid) {
            ownerService.search({term: 'lastName', context: owner.lastName}, function (err, owners) {
                if (err) {
                    $scope.searchFailure = true;
                } else {
                    $location.url('/owners');
                }
            });
        }
    };

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