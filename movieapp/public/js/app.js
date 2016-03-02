var myApp = angular.module('myApp', [
  'ngRoute'
]);

myApp.controller('searchyController', function($scope, $http) {
  $scope.$watch('search', function() {
    fetch();
  });

  $scope.search = "Roman Holiday";

  function fetch() {
    $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response) {
        console.log(response);
        $scope.details = response.data;
      });

    $http.get("https://www.omdbapi.com/?s=" + $scope.search)
      .then(function(response) {
        $scope.related = response.data;
      });
  }

  $scope.update = function(movie) {
    $scope.search = movie.Title;
  };

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }
});
