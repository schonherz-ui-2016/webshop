(function () {
    angular
        .module('webshopModule')
        .controller('productListCtrl', ProductListController);

    function ProductListController($scope, api, productService) {
        function getProducts() {
            api.getProducts()
                .then(function (result) {
                    $scope.products = result.data;
                });
        }

        $scope.$on('nodeSelected', function ($event, selection) {
            $scope.selected = selection;
        });
        $scope.selected = null;

        function getCategories() {
            api.getCategories()
                .then(function (result) {
                    var data = result.data;

                    $scope.categories = buildTree(data[2]);

                    function buildTree(node) {
                        if (node.categories && node.categories.length) node.categories = node.categories.map(function (category) {
                            var mappedCategory = data.find(function (iterator) {
                                return iterator.id == category.id;
                            });
                            var builtTree = buildTree(mappedCategory);
                            if (mappedCategory.products) node.products = (node.products || []).concat(mappedCategory.products);
                            return builtTree;
                        });
                        return node;
                    }
                })
        }

        getCategories();

        getProducts();

        $scope.propertyName = null;
        $scope.reverse = false;

        $scope.sortBy = function (propertyName) {
            $scope.activeSort = propertyName;
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

        $scope.callToAddToProductList = function (product) {
            productService.addProduct(product);
        };

        $scope.counter = productService.counter();

        $scope.updateCounter = function () {
            $scope.counter = productService.counter();
        }
    }
})();
