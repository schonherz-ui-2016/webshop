(function () {
    angular
        .module('webshopModule')

        .controller('headerCtrl', function ($scope, loginService, api) {
            function fetchSession() {
                $scope.session = loginService.getSession();
                getUser();
            }

            $scope.$on('loginStateChange', fetchSession);
            fetchSession();

            $scope.logout = function () {
                loginService.logout();
            };

            function getUser() {
                if ($scope.session.token) {
                    api.getUserId($scope.session.token)
                        .then(function (result) {
                            return api.getUser($scope.session.token, result.data.id);
                        })
                        .then(function (result) {
                            $scope.user = result.data;
                        })
                }

            }

        });

})();
