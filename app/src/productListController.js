(function () {
    angular
        .module('webshopModule')
        .controller('productListCtrl', ProductListController);

    function ProductListController($http, $scope, api) {
        function getProducts() {
            api.getProducts()
                .then(function (result) {
                    $scope.products = result.data;
                });
        }

        getProducts();
    }
})();
