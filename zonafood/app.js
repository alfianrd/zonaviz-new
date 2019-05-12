var app = angular.module('App',['ngRoute']);
app.directive('navbarBottom', function() {
	return {
		restrict: 'EA',
		template: `
			<nav class="navbar navbar-fixed-bottom fixed-bottom bg-white navbar-light border-top-purple" ng-controller="ctrlFood">
			    <div class="col-sm-12 p-0 d-flex justify-content-between align-items-center">
			        <div class="col-3 p-0 text-center">
			            <a href="#/" ng-class="{ active: isActive('/')}">
			                <i class="fa fa-home fs-20"></i>
			                <p class="mb-0 mt-0">Home</p>
			            </a>
			        </div>
			        <div class="col-3 p-0 text-center">
			            <a href="#pesan" ng-class="{ active: isActive('/pesan')}">
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
			<nav class="navbar navbar-fixed-top fixed-top navbar-purple bg-purple" ng-controller="ctrlFood">
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
app.filter('rupiah', function() {
	return function toRp(angka) {
		var rev = parseInt(angka, 10).toString().split('').reverse().join('');
		var rev2 = '';
		for (var i = 0; i < rev.length; i++) {
			rev2 += rev[i];
			if ((i + 1) % 3 === 0 && i !== (rev.length - 1)) {
				rev2 += '.';
			}
		}
		return 'Rp. ' + rev2.split('').reverse().join('');
	}
});
// Config 
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when("/", {
		templateUrl: "page/home.html",
		controller: "ctrlFood"
	})
	.when("/pesan", {
		templateUrl: "page/pesan.html",
		controller: "ctrlPesan"
	})
	.when("/pesan/:ID", {
		templateUrl: "page/pesan-detail.html",
		controller: "ctrlFood"
	})
	.when("/order", {
		templateUrl: "page/order.html",
		controller: "ctrlOrder"
	})
	.when("/akun", {
		templateUrl: "page/akun.html",
		controller: 'ctrlAkun'
	});
});
// End Config
// Controller
app.controller('ctrlFood', function($scope,$location,$routeParams) {
	$scope.title = "ZonaFood";
	$scope.idProduk = $routeParams.ID;
	$scope.jumlah = 1;
	$scope.menu = [
		{
			id: '1',
			nama: 'Lumpia Boom',
		 	harga: 10000, 
		 	ongkir: 2000,
		 	gambar: 'img/IMG-20190510-WA0008.jpg'
		 },
		{
			id: '2',
			nama: 'Nasi Telor Babeh', 
			harga: 7000, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0009.jpg'
		},
		{
			id: '3',
			nama: 'Pecel Lele', 
			harga: 20000, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0010.jpg'
		},
		{
			id: '4',
			nama: 'Soto Sokaraja', 
			harga: 20000, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0011.jpg'
		},
		{
			id: '5',
			nama: 'Sate Madura', 
			harga: 12000,
			nasi: 2000,
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0012.jpg'
		},
		{
			id: '6',
			nama: 'Kaff Geprek', 
			harga: 12500, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0013.jpg'
		},
		{
			id: '7',
			nama: 'Ayam Geprek SD', 
			harga: 6000, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0014.jpg'
		},
		{
			id: '8',
			nama: 'Nasi Goreng', 
			harga: 10000, 
			ongkir: 2000,
			gambar: 'img/IMG-20190510-WA0015.jpg'
		}
	];
	$scope.cart = [];
	$scope.logToConsole = function(index) {
		var list = $scope.menu[index];
		$scope.cart.push(list);

	};
	$scope.isActive = function(viewLocation) {
		var a = (viewLocation === $location.path());
		console.log($location.path());
	};
});

app.controller('ctrlPesan', function($scope) {
	$scope.title = "ZonaFood";

});

app.controller('ctrlOrder', function($scope) {
	$scope.title = "ZonaFood";
});

app.controller('ctrlAkun', function($scope) {
	$scope.title = "ZonaFood";
})
// End Controller