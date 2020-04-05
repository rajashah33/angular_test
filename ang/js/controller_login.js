var app = angular.module('postserviceApp', []);

app.controller('postserviceCtrl', function ($scope, $http) {
	$scope.email = null;
	$scope.password = null;
	$scope.lblMsg = null;

	$scope.postdata = function (email,password) {
		
		
		$http({
    method: 'POST',
    url: 'http://localhost:8080/api/login',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data: {email: $scope.email, password: $scope.password}
	}).then(function (response) {
		console.log(response);
		if(response.data["status"] == 1){
			sessionStorage.setItem('email',$scope.email);
			history.back();
		}
	});

	};
});