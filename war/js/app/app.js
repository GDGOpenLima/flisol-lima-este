angular.module('app', [])
.controller('MainCtrl', function($scope, $http) {
	$http.get('../../speakers.json')
	.success(function(resp) {
		debugger
		$scope.items = resp;
	});
});