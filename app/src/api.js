(function () {
    var urlBase = 'http://localhost:1337';
    angular
        .module('webshopModule')
        .service('api', apiService);

    function apiService($http) {
        this.getProducts = function () {
            return $http.get(urlBase + '/product');
        };

        this.getProductDetails = function (id) {
            return $http.get(urlBase + '/product/' + id);
        };

        this.login = function (email, password) {
            return $http.post(urlBase + '/user/login', {
                "email": email,
                "password": password
            }).then(function (result) {
                token = result.data.token;
            });
        }
    }
})();
