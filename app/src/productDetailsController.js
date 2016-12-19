(function () {
    angular
        .module('webshopModule')
        .controller('productDetailsCtrl', ProductDetailsController);

    function ProductDetailsController($scope, api, $routeParams) {
        api.getProductDetails($routeParams.id)
            .then(function (result) {
                $scope.product = result.data;
            });
    }
})();
