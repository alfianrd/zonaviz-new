var app = angular.module('App',['ngRoute']);

// Config 
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
		templateUrl: "page/home.html",
		controller: "ctrlZonaprint"
	})
	.when("/cetak", {
		templateUrl: "page/cetak.html",
		controller: "ctrlcetak"
	})
	.when("/order", {
		templateUrl: "page/order.html",
		controller: "ctrlorder"
	})
	.otherwise({
		templateUrl: 'page/404.html'
	});
});
// End Config
// Controller
app.controller('ctrlZonaprint', function($scope) {
	$scope.title = "ZonaPrint";
});

app.controller('ctrlcetak', function($scope) {
	$scope.title = "ZonaPrint";
});

app.controller('ctrlorder', function($scope) {
	$scope.title = "ZonaPrint";
});
// End Controller