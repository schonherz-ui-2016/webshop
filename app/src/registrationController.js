(function () {
    angular
        .module('webshopModule')
        .controller('RegistrationCtrl', RegistrationController);
    function RegistrationController($http, $scope) {

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

        $scope.registration = function (name, email, password) {

            $http.post('http://localhost:1337/user/register', {
                "name": name,
                "email": email,
                "password": password
            }).then(function () {
                showFeedback();
                successfulFeedback();
            }, function () {
                showFeedback();
                unsuccessfulFeedback();
            });
        }
    }
})();
