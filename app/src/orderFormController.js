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
                $scope.successfulOrder = true;
            }, function () {
                $scope.successfulOrder = false;
            });
        };

        $scope.showModal = function () {
            if ($scope.orderForm.$valid) {
                $scope.modalVisible = true;
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
