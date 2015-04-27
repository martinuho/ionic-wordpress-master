angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/menu.html",
			controller: 'AppCtrl'
		})

		.state('app.browse', {
			url: "/browse",
			views: {
				'menuContent' :{
					templateUrl: "templates/browse.html",
				}
			}
		})

		.state('app.single', {
			url: "/browse/post/:postId",
			views: {
				'menuContent' :{
					templateUrl: "templates/single.html",
					controller: 'SingleCtrl'
				}
			}
		});

	$urlRouterProvider.otherwise('/app/browse');
});

