/**
 * Created by Szimi7 on 2016.12.07..
 */
(function () {
    angular
        .module('webshopModule')
        .controller('ProductListController', function ($http, $scope) {
            $http({
                url: "http://localhost:1337/product",
                method: 'GET'
            }).then(function (result) {
                $scope.products = result.data;
            });
        });
})();
