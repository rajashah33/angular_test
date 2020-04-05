var app = angular.module('searchUsersApp', []);

app.factory('myFactory', function () {
    var obj = {};
    obj.message = '';
    obj.userData = {};
    obj.setMessage = function (newMessage) {
        obj.message = newMessage;
    };
    return obj;
});


app.controller('searchUsersCtrl', function ($scope, $http, myFactory) {

    $scope.userData = {
        id: 4,
        firstName: "Raja",
        middleName: "Kr",
        lastName: "Shah",
        birthDate: '12/12/2000',
        email: "raja56@gmail.com",
        phoneNumber: 9876541230,
        house_number: 12,
        street: "hghjg",
        city: "ghy",
        state: "assam",
        country: "india",
        zip_code: 781016,
        latitude: 98.12,
        longitude: 54.23,
    };
    // $scope.userDataArray = [];

    $scope.editUserRespData = {};

    $scope.msg = "";
    $scope.noUserData = function () {
        return Object.keys($scope.userData).length === 0;
    }
    $scope.searchByEmail = function () {
        $http.post('http://localhost:8080/api/searchuser',
            "email=" + encodeURIComponent($scope.email), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
            .then(function (response) {
                $scope.userData = response.data;
                $scope.msg = "success";
            },
                function (response) {
                    $scope.msg = response.statusText;
                    console.log(response.statusText);
                });
    };





    $scope.editUser = function () {

        // transforming data to encodedURI for x-www-form-..
        var reqData = [];
        for (var p in $scope.userData)
            reqData.push(encodeURIComponent(p) + "=" + encodeURIComponent($scope.userData[p]));
        var dataStr = reqData.join("&");
        console.log(dataStr);
        // making the request
        $http({
            method: 'POST',
            url: 'http://localhost:8080/api/edituser',
            
            // data: dataStr,
            data: {
                id: $scope.userData.id,
                firstName: $scope.userData.firstName,
                middleName: $scope.userData.middleName,
                lastName: $scope.userData.lastName,
                birthDate: $scope.userData.birthDate,
                email: $scope.userData.email,
                phoneNumber: $scope.userData.phoneNumber,
                house_number: $scope.userData.house_number,
                street: $scope.userData.street,
                city: $scope.userData.city,
                state: $scope.userData.state,
                country: $scope.userData.country,
                zip_code: $scope.userData.zip_code,
                latitude: $scope.userData.latitude,
                longitude: $scope.userData.longitude,
            },
        }).then(function (response) {
            console.log(response);
        });





    }


});

