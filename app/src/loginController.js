(function () {
    var token = "";
    angular
        .module('webshopModule')
        .controller('LoginCtrl', LoginController);
    function LoginController($http, $scope) {
        $scope.login = function (email, password) {
            $http.post('http://localhost:1337/user/login', {
                "email": email,
                "password": password
            }).then(function (result) {
                token = result.data.token;

            }, function () {

            });
        }
    }
})();
