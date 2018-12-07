
//IIFE no local variables bleed into the global scope.
(function(){
'use strict';

angular.module('myFirstApp', [])

//$scope: special object that AngularJS provides for us in order to share data between our view model and our view

.controller('MyFirstController', function($scope){
  $scope.name = "heelo";
  $scope.sayHello = function(){
    return "Hello Coursera";
  };
});

})();
