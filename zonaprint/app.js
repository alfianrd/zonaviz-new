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
app.controller('ctrlZonaprint', function($scope) {
	$scope.title = "ZonaPrint";
});

app.controller('ctrlcetak', function($scope) {
	$scope.title = "ZonaPrint";
	$scope.nama = '';
	$scope.email = '';
	$scope.alamat = '';
	$scope.notelp = '';

});

app.controller('ctrlorder', function($scope) {
	$scope.title = "ZonaPrint";
});

app.controller('ctrlakun', function($scope) {
	$scope.title = "ZonaPrint";
})
// End Controller