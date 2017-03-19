angular.module('starter').controller('JogadorController', function($scope) {
  $scope.data = {
    showReorder : false, // desativar botao de reordem
    swipe : true // aticvar deslize de tela
  };

   $scope.jogadores = [
   { nome: ' Nome : Dieniffer ' , time:'Time : Handball Feminino', posicao:'Posicão : Pivô'},
   { nome: ' Nome : Julia ' , time:'Time : Handball Feminino', posicao:'Posicão : Lateral'},
   { nome: ' Nome : Debora ' , time:'Time : Handball Feminino', posicao:'Posicão : Golera'},
   { nome: ' Nome : João ' , time:'Time : Handball Masculino', posicao:'Posicão : Pivô'},
   { nome: ' Nome : Fernada ' , time:'Time : futsal Feminino', posicao:'Posicão : Atacante'},

   
 ]; // objeto  jogadores




   $scope.moveJogador = function(jogador, fromIndex, toIndex) {
      $scope.jogadores.splice(fromIndex, 1);
      $scope.jogadores.splice(toIndex, 0, jogador);
  };

   $scope.deleteJogador = function (jogador) {
      $scope.jogadores.splice($scope.jogadores.indexOf(jogador), 1);
  };
});
