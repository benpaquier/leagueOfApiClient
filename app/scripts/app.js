'use strict';

/**
 * @ngdoc overview
 * @name leagueOfApp
 * @description
 * # leagueOfApp
 *
 * Main module of the application.
 */
angular
  .module('leagueOfApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });