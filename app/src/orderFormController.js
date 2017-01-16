/**
 * Created by Krisztián on 2016.12.20..
 */

(function () {
    angular
        .module('webshopModule')
        .controller('orderFormCtrl', orderFormController);

    function orderFormController($scope, api, loginService, $routeParams, $location, $timeout) {
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

        api.getProductDetails($routeParams.id)
            .then(function (result) {
                $scope.product = result.data;
            });

        $scope.order = function (order, item) {
            api.order(order, item, session.token).then(function () {
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
