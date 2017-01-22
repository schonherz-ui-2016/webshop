(function () {
    angular
        .module('webshopModule')
        .service('productService', function () {
            var productList = [];

            var addProduct = function (product) {
                var matchProduct = productList.find(function (item) {
                    return item.name == product.name
                });

                if (!matchProduct) {
                    productList.push(product);
                }

            };

            var getProducts = function () {
                console.log(productList);
                return productList;
            };

            var removeItem = function (index) {
                productList.splice(index, 1);
            };

            return {
                addProduct: addProduct,
                getProducts: getProducts,
                removeItem: removeItem
            }
        });
})();
