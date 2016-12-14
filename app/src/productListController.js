(function () {
    angular
        .module('webshopModule')
        .controller('ProductListCtrl', ProductListController);

    function ProductListController($http, $scope) {
        function getProducts() {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/product'
            }).then(function (result) {
                $scope.products = result.data;
            });

        }
        getProducts();
    }

})();
