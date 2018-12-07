
//IIFE no local variables bleed into the global scope.
(function(){
'use strict';

angular.module('MsgAPP', [])
.controller('Msgontroller', Msgontroller);

Msgontroller.$inject = ['$scope'];
function Msgontroller($scope) {
  $scope.name = "Faizan";

  $scope.colorOfBulb = "blue";

  $scope.sayMessage  = function(){
    return " is doing AngularJS from Coursera!";
  };

  $scope.changeColor = function(){
    $scope.colorOfBulb = "green";
  };
}

})();
