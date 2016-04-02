angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  // check token if you dont have redirect to signup

  // Auth.isAuth
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });
});
