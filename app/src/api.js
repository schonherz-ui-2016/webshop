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

        this.getUser = function (token, id) {
            return $http({
                method: 'GET',
                url: urlBase + '/user/' + id,
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        };

        this.getUserId = function (token) {
            return $http({
                method: 'GET',
                url: urlBase + '/user/me',
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        };

        this.order = function (order, item, token) {
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

        this.editProfile = function (user, token) {
            return $http({
                method: 'PUT',
                url: urlBase + '/user/' + user.id,
                data: user,
                headers: {
                    Authorization: 'JWT ' + token
                }
            })
        }
    }

    angular.module('webshopModule').service('api', apiService);
})();
