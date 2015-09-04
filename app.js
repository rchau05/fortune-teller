angular.module('paperFortune', [
	'ngRoute', 'paperFortune.controllers'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/starter_fortune.html',
		controller: 'MainCtrl'
	})

	.when('/reveal', {
		templateUrl: 'views/reveal_fortune.html',
		controller: "MainCtrl"
	})

	.when('/howto', {
		templateUrl: 'views/how_to_play.html',
		controller: "MainCtrl"
	})

	.otherwise({ 
		redirectTo: '/' 
	});

// $locationProvider.html5Mode(true)

}]);