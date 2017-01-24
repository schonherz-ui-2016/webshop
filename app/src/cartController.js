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

            angular.forEach($scope.products, function (item) {
                sum += item.price * item.quantity;

            });

            return sum;
        };

        $scope.isNull = function () {
            angular.forEach($scope.products, function (item) {
                if (item.price == 0) return false;

            });

            return true;
        }

    }
})();
