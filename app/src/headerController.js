(function () {
    angular
        .module('webshopModule')

        .controller('headerCtrl', function ($scope, loginService) {
            function fetchSession() {
                $scope.session = loginService.getSession();
            }

            $scope.$on('loginStateChange', fetchSession);
            fetchSession();

            $scope.logout = function () {
                loginService.logout();
            };
        });

})();
