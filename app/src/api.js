(function () {
    var urlBase = 'http://localhost:1337';
    angular
        .module('webshopModule')
        .service('api', Service)

    function Service($http) {
        this.getProducts = function () {
            return $http.get(urlBase + '/product');
        };

        this.getProductDetails = function (id) {
            return $http.get(urlBase + '/product/' + id)
        }
    }
})();
