angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(linkObj) {
    console.log('LINK OBJ', linkObj);
    Links.addOne(linkObj);
    // $scope.link.url = '';
    $location.path('/links');
  };

});
