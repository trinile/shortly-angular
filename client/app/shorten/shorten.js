// var linkhelper = require('../../server/links/linkController.js')
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

  $scope.link = {};

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.addLink = function(urlObj) {
    console.log('LINK OBJ', urlObj);
    Links.addOne(urlObj).then(function() {
      $location.path('/link');
    });
  };

});