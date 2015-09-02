angular.module('paperFortune.controllers', [])
.controller('MainCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {
		$scope.openURL = 'views/open_fortune.html'
		$scope.horizontal = false
		$scope.vertical = false
		$scope.close = true
		$scope.timeout = 5

		$scope.count = 0

		$scope.play = function(x){
			var count = $scope.count
			while (count < x) {
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
			}
		}

			// reveal fortune 
			// loop through numbers

	}]);
