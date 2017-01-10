/**
 * Created by Krisztián on 2016.12.20..
 */

(function () {
    angular
        .module('webshopModule')
        .controller('orderFormCtrl', orderFormController);

    function orderFormController($scope, api, $routeParams, $location, $timeout) {

        api.getProductDetails($routeParams.id)
            .then(function (result) {
                $scope.product = result.data;
            });

        $scope.order = function (order, item) {
            api.order(order, item).then(function () {
                successfulOrder();
            }, function () {
                unsuccessfulOrder();
            });
        };

        $scope.showModal = function () {
            if ($scope.orderForm.$valid) {
                $scope.modalVisible = true;
            }
        };

        var successfulOrder = function () {
            $scope.successfulOrder = true;
            $scope.unsuccessfulOrder = false;
        };

        var unsuccessfulOrder = function () {
            $scope.unsuccessfulOrder = true;
            $scope.successfulOrder = false;
        };

        $scope.redirection = function () {
            if ($scope.successfulOrder) {
                $timeout(function () {
                    $location.path("/");
                }, 300);
            }
            else if ($scope.unsuccessfulOrder) {
                $scope.modalVisible = false;
            }
        };
    }
})();
