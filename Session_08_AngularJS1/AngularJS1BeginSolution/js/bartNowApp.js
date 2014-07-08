//Create a new Angular Module for the bartNowApp. 
var bartNowApp = angular.module("bartNowApp", []);

//Create the MainCtrl Controller...
bartNowApp.controller("MainCtrl", ['$scope', function ($scope) {

  //Add a static model for a single bart station 
  $scope.station = {
    longitude: -122.271604,
    latitude: 37.803664,
    name: "12th St. Oakland City Center",
    abbr: "12TH",
    county: "alameda",
    state: "CA",
    zipcode: "94612"
  };

}]);