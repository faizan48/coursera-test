
//IIFE no local variables bleed into the global scope.
(function(){

'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function(){

});

})();
