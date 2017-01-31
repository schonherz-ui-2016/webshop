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

                    var mainCategories = [];

                    function isMainCategory() {

                        angular.forEach(data, function (category) {
                            if (!category.parent) mainCategories.push(buildTree(category));
                        })
                    }

                    isMainCategory();

                    $scope.mainCategories = mainCategories;
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
    }
})();
