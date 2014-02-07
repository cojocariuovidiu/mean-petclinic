var petClinic = angular.module('petClinic', ['ngRoute'])

    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {templateUrl: 'templates/home.html', controller: 'home'})
            .when('/owners', {templateUrl: 'templates/owners/list.html', controller: 'owners'})
            .when('/veterinarians', {templateUrl: 'templates/veterinarians/list.html', controller: 'veterinarians'})
            .otherwise({redirectTo: '/'});
    });