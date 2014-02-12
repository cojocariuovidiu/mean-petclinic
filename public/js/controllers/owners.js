var petClinic = petClinic || {};

petClinic.controller('owners', function ($scope, ownerService) {
    'use strict';

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

    $scope.create = function (owner, createForm) {
        if (createForm.$valid) {
            console.log('create... ' + JSON.stringify(owner));
        }
    };
});