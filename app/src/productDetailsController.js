/**
 * Created by Misi on 2016.12.11..
 */
(function () {
    angular
        .module('webshopModule')
        .controller('ProductDetailsController', function ($http, $routeParams, $scope) {
            $http({
                url: "http://localhost:1337/product/" + $routeParams.id,
                method: 'GET'
            }).then(function (result) {
                $scope.product = result.data;
            });
        })
})();
