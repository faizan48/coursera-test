
//IIFE no local variables bleed into the global scope.
(function(){
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController($scope, $filter, $injector) {
  $scope.name = "Faizan";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, whatever){
  return "whatever!";
}

console.log(DIController.toString());

})();
