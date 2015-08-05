/*
*	Footer directive is the header to appear on each page. 
*/
angular.module("footerDirective", [])
	.directive('siteFooter', function() {	// Look for item-choice in the html 
		return {
			restrict:'E',
    		templateUrl: 'views/partials/site-footer.html'
    	};
	});