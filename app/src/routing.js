(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'ProductListCtrl'
                })
                .when('/product/:id', {
                    templateUrl: 'templates/productDetails.html',
                    controller: 'ProductDetailsCtrl'
                })
                .when('/login', {
                    templateUrl: 'templates/loginPage.html',
                    controller: 'LoginCtrl'
                })
                .when('/order/:id', {
                    templateUrl: 'templates/orderPage.html',
                    controller: 'ProductDetailsCtrl'
                });
        })
})();
