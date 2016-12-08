(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'main.html',
                    controller: 'ProductListCtrl'
                })
                .when('/product/1', {
                    templateUrl: 'empty.html'
                });
        })
})();
