(function () {
    angular
        .module('webshopModule')
        .controller('registrationCtrl', RegistrationController);
    function RegistrationController(api, $scope, $location, $timeout) {
        $scope.register = function (customer) {
            api.registration(customer)
                .then(function () {
                    successfulReg();
                }, function () {
                    unsuccessfulReg();
                });
        };

        $scope.showModal = function () {
            if ($scope.regForm.$valid) {
                $scope.modalVisible = true;
            }
        };

        var successfulReg = function () {
            $scope.successfulReg = true;
            $scope.unsuccessfulReg = false;
        };

        var unsuccessfulReg = function () {
            $scope.unsuccessfulReg = true;
            $scope.successfulReg = false;
        };

        $scope.redirection = function () {
            if ($scope.successfulReg) {
                $timeout(function () {
                    $location.path("/login")
                }, 300);
            }
            else if ($scope.unsuccessfulReg) {
                $scope.modalVisible = false;
            }
        };
    }
})();
