(function () {
    angular
        .module('webshopModule')
        .controller('cartCtrl', CartController);

    function CartController($scope, productService) {
        $scope.products = productService.getProducts();

        $scope.removeItem = function (index) {
            productService.removeItem(index);
        };

        $scope.total = function () {
            var sum = 0;

            var valid = true;

            angular.forEach($scope.products, function (item) {
                if (item.price * item.quantity == 0) valid = false;
                sum += item.price * item.quantity;
            });

            if (valid == false) return false;

            return sum;
        };
    }
})();
