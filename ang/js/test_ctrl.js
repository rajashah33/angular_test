var app = angular.module('myApp', []);

// app.service('dataService', function () {

//     // private variable
//     var _dataObj = 9;

//     // public variable
//     this.dataObj = _dataObj;
// });

app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.lastNamep = "Dokjkje";
    $scope.editUser = function () {
        dataService.dataObj = 888;

    }


});