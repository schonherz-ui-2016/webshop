(function () {
    angular
        .module('webshopModule')
        .controller('ProductDetailsCtrl', ProductDetailsController);

    function ProductDetailsController($scope, api, $routeParams) {
        api.getProductDetails($routeParams.id)
            .then(function (result) {
                $scope.product = result.data;
            });
    }
})();
