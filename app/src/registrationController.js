(function () {
    angular
        .module('webshopModule')
        .controller('RegistrationCtrl', RegistrationController);
    function RegistrationController(api, $scope) {

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
        };

        $scope.addCustomer = function () {
            api.registration($scope.newCustomer)
                .then(function () {
                    showFeedback();
                    successfulFeedback();
                }, function () {
                    showFeedback();
                    unsuccessfulFeedback();
                });
        }
    }
})();
