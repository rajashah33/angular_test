var app = angular.module('listUsersApp', []);

app.controller('listUsers', function ($scope, $http) {

	$scope.topApps = [];


	$scope.loadUsers = function () {
		$http.post('http://localhost:8080/api/alluserdetails')
			.then(function (response) {
				$scope.topApps = response.data;
				console.log(response);
			});
	};


	// alert("Login first");
	// history.back();

});