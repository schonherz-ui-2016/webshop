(function () {
    var token = "";
    angular.module('webshopModule')
        .controller('loginCtrl', function ($http, $scope, $location, api) {
            $scope.login = function () {
                api.login($scope.email, $scope.password)
                    .then(function () {
                        $location.path("/");
                    });
            }
        })
})();
