angular.module('starter').controller('TimeController', function($scope) {
  $scope.data = {
    showReorder : false, // desativar botao de reordem
    swipe : true // aticvar deslize de tela
  }

   $scope.times = [
   { nome: ' Time : Handball Feminino' , casa:'Casa : Uni-facef', rival:'Rival : Brejão'},
   { nome: 'Time : Handball Masculo' , casa:'Casa : Uni-facef', rival:'Rival : Brejão'},
   { nome: 'Time : Fustal Feminino' , casa:'Casa : Uni-facef', rival:'Rival : Unifran'},
   { nome: 'Time : Fustal Masculino' , casa:'Casa : Uni-facef', rival:'Rival : Brejão'},
   { nome: 'Time : Volei Feminino' , casa:'Casa : Uni-facef', rival:'Rival : Unesp'},
   
 ]; // objeto  times




   $scope.moveTime = function(time, fromIndex, toIndex) {
      $scope.times.splice(fromIndex, 1);
      $scope.times.splice(toIndex, 0, time);
  };

   $scope.deleteTime = function (time) {
      $scope.times.splice($scope.times.indexOf(time), 1);
  };

});

