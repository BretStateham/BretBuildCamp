//Create a new Angular Module for the bartNowApp. 
var bartNowApp = angular.module("bartNowApp", []);

//Create the MainCtrl Controller...
bartNowApp.controller("MainCtrl", ['$scope', function ($scope) {

  //Add a static model for a single bart station 
  //This time with an array of stations though, not just one
  $scope.stations = [
    { name: "12th St. Oakland City Center", abbr: "12TH", zipcode: "94612" },
    { name: "16th St. Mission", abbr: "16TH", zipcode: "94110" },
    { name: "19th St. Oakland", abbr: "19TH", zipcode: "94612" },
    { name: "24th St. Mission", abbr: "24TH", zipcode: "94110" },
    { name: "Ashby", abbr: "ASHB", zipcode: "94703" },
    { name: "Balboa Park", abbr: "BALB", zipcode: "94112" },
    { name: "Bay Fair", abbr: "BAYF", zipcode: "94578" },
    { name: "Castro Valley", abbr: "CAST", zipcode: "94546" },
    { name: "Civic Center/UN Plaza", abbr: "CIVC", zipcode: "94102" },
    { name: "Coliseum/Oakland Airport", abbr: "COLS", zipcode: "94621" }];

}]);