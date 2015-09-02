angular.module('paperFortune', [
	'ngRoute', 'paperFortune.controllers'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/starter_fortune.html',
		controller: 'MainCtrl'
	})

	$routeProvider
	.when('/reveal', {
		templateUrl: 'views/reveal_fortune.html',
		controller: "MainCtrl"
	})

	.otherwise({ 
		redirectTo: '/' 
	});

}]);