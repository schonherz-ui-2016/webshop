/**
 * Created by Krisztián on 2016.12.20..
 */

(function () {
    angular
        .module('webshopModule')
        .controller('orderFormCtrl', orderFormController);

    function orderFormController($scope, api, $routeParams) {
        api.getProductDetails($routeParams.id)
            .then(function (result) {
                $scope.product = result.data;
            });
    }
})();