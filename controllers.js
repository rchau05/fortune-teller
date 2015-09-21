angular.module('paperFortune.controllers', [])
.controller('MainCtrl', ['$scope', '$interval', '$rootScope', '$location', '$http',
	function($scope, $interval, $rootScope, $location, $http) {

		$scope.go = function ( path ) {
  	$location.path( path );
			};

		$scope.openURL = 'views/open_fortune.html'
		$scope.horizontal = false
		$scope.vertical = false
		$scope.close = true
		$scope.playCount=0
		$scope.count = 0
		$scope.message = 'Please wait for your fortune!!';

		$scope.play = function(x){

			var count = $scope.count
			if($scope.playCount<2) {
			$interval(function(){
				if(count%4===0){
					$scope.horizontal = false
					$scope.vertical = false
					$scope.close = true
					console.log('1')
				}
				if(count%4===1){
					$scope.horizontal = false
					$scope.vertical = true
					$scope.close = false
					console.log('2')
				}
				if(count%4===2){
					$scope.horizontal = false
					$scope.vertical = false
					$scope.close = true				
					console.log('3')
				}
				if(count%4===3){
					$scope.horizontal = true
					$scope.vertical = false
					$scope.close = false
				  console.log('4')
				}
				count++
				},350, x);
				console.log($scope.playCount, 'scope')
				} else {			
					console.log('/reveal');
					$location.path( "/reveal" );	
						var randNum = Math.floor(Math.random()*100)
					$http.get('http://fortunecookieapi.com/v1/fortunes').
					  then(function(response) {
   						var message = response.data[randNum].message;
					  	console.log('MESSAGE', message);
					  	var mes = document.getElementById('message'); 
					  	mes.innerHTML = message;
					  });	

				}
				$scope.playCount++


		}
	}]);