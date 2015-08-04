angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the about page
		.when('/', {
			templateUrl : 'views/pages/about.html'
		})
		
		// route for the about page
		.when('/resume', {
			templateUrl : 'views/pages/resume.html'
		})
/*
		// route for the blog page
		.when('/blog', {
			templateUrl : 'app/views/pages/blog.html',
   			controller  : 'blogController',
    		controllerAs: 'blog'
		})

		// route for the life page
		.when('/about', {
			templateUrl : 'app/views/pages/life.html',
   			controller  : 'lifeController',
    		controllerAs: 'life'
		})*/

	// Used to make the url pretty and without hastags
	$locationProvider.html5Mode(true);

});