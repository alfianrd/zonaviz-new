var app = angular.module('App', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
		template: "<h1>Welcome to Simple App</h1>"
	})
	.when("/zonaviz", {
		templateUrl: "posts/view.html",
		controller: "ctrlPrint"
	})
	.otherwise({
		templateUrl: "404.html"
	});
});
app.controller('ctrlMain', function($scope,$http) {
    $scope.showMenu = function() {
        $('.navbar-left').css('transform', 'translateX(0%)');
    }
    $scope.closeMenu = function() {
        $('.navbar-left').css('transform', 'translateX(-100%)');
    }
});

app.controller('ctrlPrint', function($scope) {
	$scope.title = "ZonaPrint";
});