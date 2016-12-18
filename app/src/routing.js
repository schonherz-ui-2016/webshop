(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'productListCtrl'
                })
                .when('/product/:id', {
                    templateUrl: 'templates/productDetails.html',
                    controller: 'productDetailsCtrl'
                })
                .when('/login', {
                    templateUrl: 'templates/loginPage.html',
                    controller: 'loginCtrl'
                });
        })
})();
