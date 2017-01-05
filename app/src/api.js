(function () {
    var urlBase = 'http://localhost:1337';

    function apiService($http) {
        this.getProducts = function () {
            return $http.get(urlBase + '/product');
        };

        this.getProductDetails = function (id) {
            return $http.get(urlBase + '/product/' + id);
        };

        this.registration = function (customer) {
            return $http.post(urlBase + '/user/register', customer);
        };

        this.login = function (email, password) {
            return $http.post(urlBase + '/user/login', {
                "email": email,
                "password": password
            }).then(function (result) {
                return result.data.token;
            });
        };

        this.getUser = function (id) {
            return $http.get(urlBase + '/user/' + id);
        };

        this.getUserId = function () {
            return $http.get(urlBase + '/user/me');
        };
    }

    angular.module('webshopModule').service('api', apiService);
})();
