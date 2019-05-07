var app = angular.module('App', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
		templateUrl: "zonaviz/index.html",
		controller: "ctrlMain"
	})
	.otherwise({
		templateUrl: "404.html"
	});
});
app.controller('ctrlMain', function($scope,$http) {
	$scope.title = "ZonaViz";
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