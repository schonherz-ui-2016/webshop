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

        this.getSession = function () {
            session.authenticated = $window.localStorage.getItem('authenticated');
            return session;
        };
    }
})();

