/**
 * Created by Szimi7 on 2016.12.07..
 */
(function () {
    angular
        .module('webshopModule')
        .controller('ProductListCtrl', productListController);

    function productListController($http, $scope) {
        $http({
            method: 'GET',
            url: 'http://localhost:1337/product'
        }).then(function (result) {
            $scope.products = result.data;
        });
    }
})();





