(function () {

    angular.module('webshopModule')
        .controller('loginCtrl', function ($scope, $location, loginService) {
            $scope.login = function () {
                loginService.login($scope.email, $scope.password, $scope.rememberMe)
                    .then(function () {
                        $location.path("/");
                    }, function () {
                        $scope.unsuccesfulLogin = true;
                    });
            };

            $scope.showModal = function () {
                if ($scope.loginForm.$valid) {
                    $scope.modalVisible = true;
                }
            };
        })
})();
