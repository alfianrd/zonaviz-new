var app = angular.module('App',['ngRoute']);

// Config 
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
		templateUrl: "page/home.html",
		controller: "ctrlzonatech"
	})
	.when("/pesan", {
		templateUrl: "page/pesan.html",
		controller: "ctrlpesan"
	})
	.when("/order", {
		templateUrl: "page/order.html",
		controller: "ctrlorder"
	})
	.when("/akun", {
		templateUrl: "page/akun.html",
		controller: 'ctrlakun'
	})
	.otherwise({
		templateUrl: 'page/404.html'
	});
});
// End Config
// Controller
app.controller('ctrlzonatech', function($scope) {
	$scope.title = "ZonaTech";
});

app.controller('ctrlpesan', function($scope) {
	$scope.title = "ZonaTech";

});

app.controller('ctrlorder', function($scope) {
	$scope.title = "ZonaTech";
});

app.controller('ctrlakun', function($scope) {
	$scope.title = "ZonaTech";
})
// End Controller