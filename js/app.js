var app = angular.module('gloify', [
	'ngRoute',
	'ui.bootstrap.tpls',
	'ui.bootstrap',
	'ngResource',
  'oitozero.ngSweetAlert'
	]);

app.config(['$routeProvider', '$httpProvider' ,function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('authInterceptor');
  $routeProvider
  .when('/login', {
    templateUrl : 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })
  .when('/home', {
    templateUrl: 'templates/landing.html',
    controller: 'LandingCtrl'
  })
  .otherwise("/home");
}]);