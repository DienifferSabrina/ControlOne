angular.module('starter').controller('usuarioController',function($scope,$state){

$scope.cadastrar = function(){
  $state.go('login');
};

})
