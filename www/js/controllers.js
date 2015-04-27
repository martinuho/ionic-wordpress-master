angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicLoading, $http) {
	$scope.show = function() {
		$ionicLoading.show({
			template: 'Loading...'
		});
	};

	$scope.hide = function(){
		$ionicLoading.hide();
	};

	$scope.posts = [];
	$scope.categories = [];

	$scope.show();

	$http.get('https://public-api.wordpress.com/rest/v1.1/sites/promenaizkorena.com/posts/').success(function(data){
		$scope.posts = data.posts;

		$http.get('https://public-api.wordpress.com/rest/v1/sites/promenaizkorena.com/categories/').success(function(data){
			$scope.categories = data.categories;
			$scope.hide();
		});
	});

	$scope.doRefresh = function() {
		$http.get('https://public-api.wordpress.com/rest/v1.1/sites/promenaizkorena.com/posts/').success(function(data){
			$scope.posts = data.posts;
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
})

.controller('SingleCtrl', function($scope, $stateParams, $http) {
	$scope.post = [];

	$scope.show();

	$http.get('https://public-api.wordpress.com/rest/v1/sites/promenaizkorena.com/posts/slug:'+$stateParams.postId).success(function(data){
		$scope.post = data;

		console.log($scope.post.title);

		$scope.hide();
	});
})