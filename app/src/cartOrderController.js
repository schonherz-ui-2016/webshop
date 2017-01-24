(function () {
    angular
        .module('webshopModule')
        .controller('cartOrderCtrl', CartOrderController);

    function CartOrderController($scope, api, loginService, productService, $location, $timeout) {
        var session = loginService.getSession();

        function getUser() {
            api.getUserId(session.token)
                .then(function (result) {
                    api.getUser(session.token, result.data.id);
                    return result;
                })
                .then(function (result) {
                    $scope.user = result.data;
                });
        }

        getUser();

        $scope.products = productService.getProducts();

        $scope.order = function (order, item) {
            api.order(order, item, session.token).then(function () {
                $scope.successfulOrder = true;
            }, function () {
                $scope.successfulOrder = false;
            });
        };

        $scope.emptyArray = function () {
            productService.emptyArray();
        };

        $scope.showModal = function () {
            if ($scope.orderForm.$valid) {
                $scope.modalVisible = true;
                productService.emptyArray();
            }
        };

        $scope.redirection = function () {
            if ($scope.successfulOrder) {
                $timeout(function () {
                    $location.path("/");
                }, 300);
            }
            else {
                $scope.modalVisible = false;
            }
        };
    }
})();
