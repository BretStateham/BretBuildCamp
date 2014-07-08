//Create a new Angular Module for the bartNowApp. 
var bartNowApp = angular.module("bartNowApp", []);

//Create the MainCtrl Controller...
bartNowApp.controller("MainCtrl", ['$scope', function ($scope) {

  //Add a static model for a single bart station 
  //This time with an array of stations each with it's
  //own nested array of estimate times of departure for 
  //multiple remote stations, as welll as individual estimates
  //for individual trains on to those target destinations
  //The sample data here is trimmed significantly to help
  //visualize it.
  $scope.stations = [{
    name: "12th St. Oakland City Center",
    abbr: "12TH",
    etd: [
      {
        destination: "24th Street",
        estimate: [
          { minutes: "25", color: "YELLOW" },
          { minutes: "40", color: "YELLOW" }]
      },
      {
        destination: "Fremont",
        estimate: [
          { minutes: "5", color: "ORANGE" },
          { minutes: "20", color: "ORANGE" }]
      }]
  },
  {
    name: "16th St. Mission",
    abbr: "16TH",
    etd: [
      {
        destination: "24th Street",
        estimate: [
          { minutes: "43", color: "YELLOW" },
          { minutes: "58", color: "YELLOW" }]
      },
      {
        destination: "Daly City",
        estimate: [
          { minutes: "3", color: "GREEN" },
          { minutes: "9", color: "BLUE" }]
      }]
  }
  ];

}]);