/*
*	Choice directive is the actual box(div) in which the choice is enclosed. 
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