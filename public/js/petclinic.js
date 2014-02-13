var petClinic = angular.module('petClinic', ['ngRoute', 'ngResource'])

    .config(function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {templateUrl: 'templates/home.html', controller: 'home'})
            .when('/owner/list', {templateUrl: 'templates/owner/list.html', controller: 'ownerSearch'})
            .when('/owner/find', {templateUrl: 'templates/owner/find.html', controller: 'ownerSearch'})
            .when('/owner/create', {templateUrl: 'templates/owner/create.html', controller: 'ownerCreate'})
            .when('/owner/details/:id', {templateUrl: 'templates/owner/details.html', controller: 'ownerDetails'})
            .when('/veterinarian/list', {templateUrl: 'templates/veterinarian/list.html', controller: 'vetList'})
            .otherwise({redirectTo: '/'});
    });