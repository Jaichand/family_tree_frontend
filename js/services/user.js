angular.module('gloify')
.factory('User', function($resource, $http, $rootScope, $location) {
   var res;
   res = $resource('http://localhost:8081/api/user/:id', {
     "id": "@id"
   }, {
       login: {
         url: 'http://localhost:8081/api/login',
         method: 'POST'
      },
      getFamily: {
         url: 'http://localhost:8081/api/getFamily',
         method: 'GET'
     },
     loggedInUser: {
       url: 'http://localhost:8081/api/loggedInUser',
       method: 'GET'
     },
     signUp: {
       url: 'http://localhost:8081/api/signUp',
       method: 'POST'
     }
 });
return res;
});