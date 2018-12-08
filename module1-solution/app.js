(function(){
  'use strict';

  angular.module('Module1', [])
  .controller('AssignmentController', AssignmentController);

  AssignmentController.$inject = ['$scope'];
  function AssignmentController($scope) {
    $scope.response = "";
    var enjoy = "Enjoy!";
    var enterData = "Please enter data first";
    var tooMuch = "Too much!";
    $scope.value = "";
    $scope.totalValues = 0;

    $scope.valueChanged = function(){
      $scope.response = "";
    };

    $scope.showStatus = function(){

        if ($scope.value == "") {
          $scope.response = enterData;
        }else {

          var items = $scope.value.split(',');

          var count = items.length;

          if (count <= 3) {
            $scope.response = enjoy;
          }else {
            $scope.response = tooMuch;
          }
        }
    };

  };

})();
