/**
 * Created by Krisztián on 2016.12.09..
 */

(function () {
    angular
        .module('webshopModule')
        .controller('ProductDetailsCtrl', ProductDetailsController);

    function ProductDetailsController($http, $scope, $routeParams) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/product/' + $routeParams.id
            })
                .then(function (result) {
                    $scope.product = result.data;
                });

        }

})();
