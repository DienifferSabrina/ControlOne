angular.module('starter').config(function($stateProvider,$urlRouterProvider){
	$stateProvider

	.state('menu',{
		url:'/menu',
		templateUrl:'templates/menu.html',
		abstract: true
	})

	.state('menu.home',{
		url:'/home',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/home.html'
			}
		}
	})

	.state('index',{
		url: '/index',
		templateUrl: 'templates/index.html'
	})

	.state('cadastro',{
		url: '/cadastro',
		templateUrl: 'templates/cadastro.html',
		controller:'usuarioController'
	})

	.state('login',{
		url: '/login',
		templateUrl: 'templates/login.html'
	})


	.state('menu.cadTime',{
		url: '/cadTime',
		views: {
			'menuConteudo': {
				templateUrl: 'templates/cadTime.html',
				controller : 'TimeController'
			}
		}
	})

	.state('menu.listaTimes',{
		url: '/listaTimes',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/listaTimes.html',
				controller:'TimeController'
			}
		}
	})

	.state('menu.cadJogador',{
		url: '/cadJogador',
		views: {
			'menuConteudo': {
				templateUrl: 'templates/cadJogador.html',
				controller : 'JogadorController'
			}
		}
	})

	.state('menu.listaJogadores',{
		url: '/listaJogadores',
		views:{
			'menuConteudo':{
				templateUrl: 'templates/listaJogadores.html',
				controller : 'JogadorController'
			}
		}
	})


	$urlRouterProvider.otherwise('/index');
});
