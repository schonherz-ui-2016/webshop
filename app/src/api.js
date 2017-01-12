(function () {
    var urlBase = 'http://localhost:1337';

    function apiService($http, $window) {
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

        this.logout = function () {
        };

        this.getUser = function (id) {
            return $http.get(urlBase + '/user/' + id);
        };

        this.getUserId = function () {
            return $http.get(urlBase + '/user/me');
        };

        this.order = function (order, item) {
            return $http({
                method: 'POST',
                url: urlBase + '/order',
                data: {
                    items: {item: item},
                    country: order.country,
                    city: order.city,
                    zip: order.zip,
                    street: order.street
                },
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        };
    }

    angular.module('webshopModule').service('api', apiService);
})();
