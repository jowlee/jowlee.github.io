/*
*	Header directive is the header to appear on each page. 
*/
angular.module("headerDirective", [])
	.directive('siteHeader', function() {	// Look for item-choice in the html 
		return {
			restrict:'E',
			scope: {
				tab: "@"
			},
    		templateUrl: 'views/partials/site-header.html'
    	};
	});