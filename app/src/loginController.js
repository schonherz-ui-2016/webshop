(function () {
    var token = "";
    angular.module('webshopModule')
        .controller('loginCtrl', function ($http, $scope, $location) {
            $scope.login = function (email, password) {
                return $http.post('http://localhost:1337/user/login', {
                    "email": email,
                    "password": password
                }).then(function (result) {
                    result.data.token = token;
                    $location.path("/");
                });
            }
        })
})();
