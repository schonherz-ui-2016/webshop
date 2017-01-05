(function () {
    angular
        .module('webshopModule')
        .service('loginService', LoginService);

    function LoginService(api, $window) {

        var session = {authenticated: false};

        this.login = function (email, password) {
            return api.login(email, password)
                .then(function (token) {
                    session.authenticated = true;
                    $window.localStorage.setItem('token', token);
                });
        };

        this.getToken = function () {
            if ($window.localStorage.getItem('token')) {
                session.authenticated = true;
            } else {
                session.authenticated = false;
            }
            return session;
        };
    }
})();

