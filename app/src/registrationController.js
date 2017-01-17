(function () {
    angular
        .module('webshopModule')
        .controller('registrationCtrl', RegistrationController);
    function RegistrationController(api, $scope, $location, $timeout) {
        $scope.register = function (customer) {
            api.registration(customer)
                .then(function () {
                    $scope.successfulReg = true;
                }, function () {
                    $scope.successfulReg = false;
                });
        };

        $scope.showModal = function () {
            if ($scope.regForm.$valid) {
                $scope.modalVisible = true;
            }
        };

        $scope.redirection = function () {
            if ($scope.successfulReg) {
                $timeout(function () {
                    $location.path("/login")
                }, 300);
            }
            else {
                $scope.modalVisible = false;
            }
        };
    }
})();
