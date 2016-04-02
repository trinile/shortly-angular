// var linkhelper = require('../../server/links/linkController.js')
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {

    console.log('LINK OBJ', url);
    Links.addOne(url);
    // $scope.link.url = '';
    $location.path('/links');
  };

});


  // Link.addOne = function(url) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: newLinkObj
  //   }).then(function(response) {
  //     return response;
  //   });
  // };
