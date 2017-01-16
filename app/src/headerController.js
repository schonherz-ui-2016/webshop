(function () {
    angular
        .module('webshopModule')

        .controller('headerCtrl', function ($scope, loginService, api) {
            function fetchSession() {
                $scope.session = loginService.getSession();
            }

            $scope.$on('loginStateChange', fetchSession);
            fetchSession();

            $scope.logout = function () {
                loginService.logout();
            };

            var session = loginService.getSession();

            function getUser() {
                if (session.token) {
                    api.getUserId(session.token)
                        .then(function (result) {
                            return api.getUser(session.token, result.data.id);
                        })
                        .then(function (result) {
                            $scope.user = result.data;
                        })
                }

            }

            getUser();

        });

})();
