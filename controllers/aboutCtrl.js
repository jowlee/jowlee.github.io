angular.module('aboutCtrl', [])

.controller('aboutController', function($scope) {

	var about = this;
	about.display = "first";

	/* Timer to display words on start*/
	setTimeout(function(){
		console.log("hit");
		about.display = "second";
		console.log(about.display);
		$scope.$apply();

	},3000);

	setTimeout(function(){
		console.log("hit again");
		about.display = "third";
		$scope.$apply();
	},6000);

});
