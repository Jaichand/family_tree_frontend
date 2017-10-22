angular.module('gloify')
.controller('LandingCtrl', function($scope, $location, User){
  if (!localStorage.getItem('isLoggedIn')) {
    $location.url('/login')
  }
  if (!localStorage.getItem('auth-token')) {
    $location.url('/login')
  }
  User.getFamily().$promise
  .then(function (response) {
    console.log("Here are the family", response);
    $scope.myFamily = response.family;
  });
  $scope.logOut = function () {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('auth-token')
    $location.url('/login');
  }
});