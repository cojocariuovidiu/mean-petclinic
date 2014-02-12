var petClinic = petClinic || {};

petClinic.controller('owners', function ($scope, $log, ownerService) {
    'use strict';

    $scope.createSuccess = false;
    $scope.createFailure = false;
    $scope.createFailureMsg = null;

    $scope.search = function (owner, searchForm) {
        if (searchForm.$valid) {
            console.log('searching... for ' + owner.lastName);

            ownerService.search({term: 'lastName', context: owner.lastName}, function (err, data) {
                if (err) {
                    console.log('it failed...');
                }
                console.log('we\'re good');
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