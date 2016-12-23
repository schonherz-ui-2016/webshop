(function () {
    angular
        .module('webshopModule')
        .controller('RegistrationCtrl', RegistrationController);
    function RegistrationController(api, $scope, $location) {
        $scope.register = function (customer) {
            api.registration(customer)
                .then(function () {
                    showFeedback();
                    successfulFeedback();
                }, function () {
                    showFeedback();
                    unsuccessfulFeedback();
                });
        };

        var showFeedback = function () {
            $scope.feedbackVisible = true;
        };

        var successfulFeedback = function () {
            $scope.successfulFeedback = true;
            $scope.unsuccessfulFeedback = false;
        };

        var unsuccessfulFeedback = function () {
            $scope.unsuccessfulFeedback = true;
            $scope.successfulFeedback = false;
        };

        $scope.hideFeedback = function () {
            $scope.feedbackVisible = false;
            if ($scope.successfulFeedback == true) {
                $location.path("/login");
            }
        };
    }
})();
