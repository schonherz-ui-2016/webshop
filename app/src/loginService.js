(function () {
    angular
        .module('webshopModule')
        .service('loginService', LoginService);

    function LoginService(api, $window, $rootScope) {
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
                    $rootScope.$broadcast('loginStateChange', true);
                });
        };

        this.getSession = function () {
            return session;
        };

        this.logout = function logout() {
            $window.localStorage.removeItem('token');
            session.token = undefined;
            session.authenticated = false;
            $rootScope.$broadcast('loginStateChange', false);
        };


    }
})();
