var app = angular.module('postSendOTP', []);

app.controller('postOtpCtrl', function ($scope, $http) {
	$scope.email = null;

	$scope.postdata = function (email) {
		
		$http({
    method: 'POST',
    url: 'http://localhost:8080/api/generateotp',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data: {email: $scope.email}
	}).then(function (response) {
		console.log(response);
		if(response.data["status"] == 1){
			console.log("OTP Sent");
		}
	});

	};
});

var app = angular.module('postResetPass', []);

app.controller('postResetPassCtrl', function ($scope, $http) {
	$scope.email = null;
	$scope.newPassword = null;
	$scope.otp = null;

	$scope.postdata = function (email,newPassword, otp) {
		
		$http({
    method: 'POST',
    url: 'http://localhost:8080/api/newpassword',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data: {email: $scope.email, newPassword: $scope.newPasswor, opt: $scope.otp}
	}).then(function (response) {
		console.log(response);
		if(response.data["status"] == 1){
			console.log("Password reset successful");
		}
	});

	};
});