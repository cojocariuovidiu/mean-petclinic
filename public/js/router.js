angular.module('PetClinic', ['ngRoute'])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {templateUrl: 'templates/home.html'})
            .otherwise({redirectTo: '/'});
    })

    .controller('home', function ($scope) {
    });