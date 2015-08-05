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

		// route for the blog page
		.when('/blog', {
			templateUrl : 'views/pages/blog.html'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/pages/contact.html'
		})

	// Used to make the url pretty and without hastags
	$locationProvider.html5Mode(true);

});