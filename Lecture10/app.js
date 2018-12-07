
//IIFE no local variables bleed into the global scope.
(function(){
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope', '$filter', DIController]);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter) {
  $scope.name = "Faizan";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

})();

// !function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(n,e){n.name="Faizan",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}])}();
