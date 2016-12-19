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
    }

    angular.module('webshopModule').service('api', apiService);
})();
