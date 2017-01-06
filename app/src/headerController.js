(function () {
    angular
        .module('webshopModule')

        .controller('headerCtrl', function ($scope, $rootScope, $http, api, loginService) {
            $scope.session = loginService.getSession();
        });

})();
