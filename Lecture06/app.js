
//IIFE no local variables bleed into the global scope.
(function(){
'use strict';

angular.module('NameCalculator', [])

//$scope: special object that AngularJS provides for us in order to share data between our view model and our view

.controller('NameCalculatorController', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function(){
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNumericForString(string){
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }

});
})();
