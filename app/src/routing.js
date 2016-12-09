(function () {
    angular
        .module('webshopModule')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'ProductListController'
                })
                .when('/product/:id', {
                    templateUrl: 'templates/productDetails.html',
                    controller: function ($http, $routeParams, $scope) {
                        $http({
                            url: "http://localhost:1337/product/" + $routeParams.id,
                            method: 'GET'
                        }).then(function (result) {
                            $scope.product = result.data;
                        });
                    }
                });
        })
})();
