(function () {

    angular.module('webshopModule')
        .controller('loginCtrl', function ($scope, $location, loginService) {

            $scope.login = function () {
                loginService.login($scope.email, $scope.password)
                    .then(function () {
                        $location.path("/authenticated");
                    });

            }
        })
})();



