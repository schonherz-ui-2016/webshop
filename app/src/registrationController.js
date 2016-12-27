(function () {
    angular
        .module('webshopModule')
        .controller('registrationCtrl', RegistrationController);
    function RegistrationController(api, $scope, $location, $timeout) {
        $scope.register = function (customer) {
            api.registration(customer)
                .then(function () {
                    successfulFeedback();
                }, function () {
                    unsuccessfulFeedback();
                });
        };

        $scope.showModal = function () {
            if ($scope.regForm.$valid) {
                $scope.modalVisible = "modal";
            }
        };

        var successfulFeedback = function () {
            $scope.successfulFeedback = true;
            $scope.unsuccessfulFeedback = false;
        };

        var unsuccessfulFeedback = function () {
            $scope.unsuccessfulFeedback = true;
            $scope.successfulFeedback = false;
        };

        $scope.redirection = function () {
            if ($scope.successfulFeedback) {
                $timeout(function () {
                    $location.path("/login")
                }, 300);
            }
            else if ($scope.unsuccessfulFeedback) {
                $scope.modalVisible = "";
            }
        };
    }
})();
