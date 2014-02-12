var petClinic = angular.module('petClinic', ['ngRoute'])

    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {templateUrl: 'templates/home.html', controller: 'home'})
            .when('/owners', {templateUrl: 'templates/owners/find.html', controller: 'owners'})
            .when('/owners/create', {templateUrl: 'templates/owners/create.html', controller: 'owners'})
            .when('/veterinarians', {templateUrl: 'templates/veterinarians/list.html', controller: 'veterinarians'})
            .otherwise({redirectTo: '/'});
    });