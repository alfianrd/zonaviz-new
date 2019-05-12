var app = angular.module('App',['ngRoute']);
app.directive('navbarBottom', function() {
	return {
		restrict: 'EA',
		template: `
			<nav class="navbar navbar-fixed-bottom fixed-bottom bg-white navbar-light border-top-purple" ng-controller="ctrlZonaprint">
			    <div class="col-sm-12 p-0 d-flex justify-content-between align-items-center">
			        <div class="col-3 p-0 text-center">
			            <a href="#/" ng-class="{ active: isActive('/')}">
			                <i class="fa fa-home fs-20"></i>
			                <p class="mb-0 mt-0">Home</p>
			            </a>
			        </div>
			        <div class="col-3 p-0 text-center">
			            <a href="#cetak" ng-class="{ active: isActive('/cetak')}">
			                <i class="fa fa-shopping-cart fs-20"></i>
			                <p class="mb-0 mt-0">Cart</p>
			            </a>
			        </div>
			        <div class="col-3 p-0 text-center">
			            <a href="#order" ng-class="{ active: isActive('/order')}">
			                <i class="fa fa-bar-chart fs-20"></i>
			                <p class="mb-0 mt-0">Order</p>
			            </a>
			        </div>
			        <div class="col-3 p-0 text-center">
			            <a href="#akun" ng-class="{ active: isActive('/akun')}">
			                <i class="fa fa-user-o fs-20"></i>
			                <p class="mb-0 mt-0">Akun</p>
			            </a>
			        </div>
			    </div>
			</nav>
		`
	};
});
app.directive('navbarTop', function() {
	return {
		restrict: 'EA',
		template: `
			<nav class="navbar navbar-fixed-top fixed-top navbar-purple bg-purple" ng-controller="ctrlZonaprint">
			    <div class="d-flex justify-content-between align-items-center">
			        <a href="../" class="btn p-0 pt-1"><i class="fa fa-chevron-left text-warning fs-25" id="open-navbar-left"></i></a>
			        <a class="navbar-logo h4 mb-0 ml-3" href="#">{{ title }}</a>
			    </div>
			    <button class="btn btn-sm rounded-20 btn-warning text-white bold" id="btn-open-app"><i class="fa fa-search"></i></button>
			</nav>
			<!-- Navbar Left -->
			<div class="navbar-left bg-warning p-5">
			    <div class="close-navbar-left">
			        <button type="button" class="btn text-white p-0 mb-3" id="close-navbar-left"><i class="fa fa-times fs-25"></i></button>
			    </div>
			    <ul class="list-group">
			        <li class="list-inline mb-2"><a href="index.html" class="bold">HOME</a></li>
			        <li class="list-inline mb-2"><a href="" class="bold">FEATURES</a></li>
			        <li class="list-inline mb-2"><a href="" class="bold">ABOUT</a></li>
			    </ul>
			    <hr class="border-white">
			    <ul class="list-group">
			        <li class="list-inline mb-2"><a href="" class="bold">CONTACT US</a></li>
			        <li class="list-inline mb-2"><a href="" class="bold">FAQ</a></li>
			        <li class="list-inline mb-2"><a href="" class="bold">TERMS & CONDITIONS</a></li>
			        <li class="list-inline mb-2"><a href="" class="bold">INFORMATION</a></li>
			    </ul>
			    <hr class="border-white">
			    <div class="list-inline text-center" role="group" aria-label="Basic example">
			        <button type="button" class="btn text-white mr-1"><i class="fa fa-instagram fs-20"></i></button>
			        <button type="button" class="btn text-white mr-1"><i class="fa fa-facebook fs-20"></i></button>
			        <button type="button" class="btn text-white mr-1"><i class="fa fa-envelope fs-20"></i></button>
			        <button type="button" class="btn text-white mr-1"><i class="fa fa-twitter fs-20"></i></button>
			    </div>
			</div>
		`
	}
});
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
app.controller('ctrlZonaprint', function($scope,$location) {
	$scope.title = "ZonaPrint";
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
});

app.controller('ctrlcetak', function($scope) {
	$scope.title = "ZonaPrint";

});

app.controller('ctrlorder', function($scope) {
	$scope.title = "ZonaPrint";
});

app.controller('ctrlakun', function($scope) {
	$scope.title = "ZonaPrint";
})
// End Controller