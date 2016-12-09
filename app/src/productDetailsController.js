/**
 * Created by Krisztián on 2016.12.09..
 */

(function () {
    angular
        .module('webshopModule')
        .controller('ProductDetailsCtrl', ProductDetailsController);

    function ProductDetailsController($http, $scope) {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/product/{id}'
            })
                .then(function (result) {
                    $scope.details = result.data;
                });

        }

})();
