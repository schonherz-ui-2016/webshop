(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'ProductListCtrl'
                })
                .when('/product/1', {
                    templateUrl: 'templates/empty.html'
                });
        })
})();
