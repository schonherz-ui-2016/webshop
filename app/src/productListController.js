(function () {
    angular
        .module('webshopModule')
        .controller('productListCtrl', ProductListController);

    function ProductListController($scope, api) {
        function getProducts() {
            api.getProducts()
                .then(function (result) {
                    $scope.products = result.data;

                    $scope.sortedProducts = {};
                    $scope.products.forEach(function (product) {
                        if (!$scope.sortedProducts[product.category.name]) {
                            $scope.sortedProducts[product.category.name] = [];
                        }

                        $scope.sortedProducts[product.category.name].push(product);
                    });

                    $scope.categories = [];
                    angular.forEach($scope.sortedProducts, function (value, key) {
                        $scope.categories.push({
                            name: key,
                            product: value
                        });
                    });
                });
        }

        getProducts();

        $scope.showProducts = true;

        $scope.showOnlyProducts = function (value) {
            $scope.activeSort = value;

            $scope.showProducts = true;
        };

        $scope.showOnlyCategories = function (value) {
            $scope.activeSort = value;

            $scope.showCategories = true;
            $scope.showProducts = false;
        };

        $scope.propertyName = null;
        $scope.reverse = false;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.showCategories = false;
        };

        $scope.lastCategory = null;

        $scope.isNewCategory = function (product) {
            if ($scope.lastCategory != product.category.name) {
                $scope.lastCategory = product.category.name;
                return true;
            }

            return false;
        };
    }
})();
