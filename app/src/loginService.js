(function () {
    angular
        .module('webshopModule')
        .service('loginService', LoginService);

    function LoginService(api, $window) {
        var token = $window.localStorage.getItem('token');
        var session = {
            authenticated: !!token,
            token: token
        };

        this.login = function (email, password) {
            return api.login(email, password)
                .then(function (token) {
                    session.authenticated = true;
                    session.token = token;
                    $window.localStorage.setItem('token', token);
                });
        };

        this.getSession = function () {
            return session;
        };
    }
})();
