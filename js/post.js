angular.module('postLoaderApp', ['ngResource', 'ngSanitize'])
  .controller('PostController', function($scope, $http, $window, $location) {
  	postId = $location.search().id;

	$http.get(
		'https://public-api.wordpress.com/rest/v1.1/sites/angelwgao.wordpress.com/posts/'+postId
		).success(function(data){
			$scope.post = data;
		});

  });

