(function () {
    angular
        .module('webshopModule')
        .controller('userProfileCtrl', UserProfileController);
    function UserProfileController(api, loginService, $scope) {
        var session = loginService.getSession();

        function getUser() {
            api.getUserId(session.token)
                .then(function (result) {
                    api.getUser(session.token, result.data.id);
                    return result;
                })
                .then(function (result) {
                    $scope.user = result.data;
                });
        }

        getUser();

        $scope.closeModal = function () {
            $scope.modalVisible = false;
        };

        var editProfile = function (user) {
            api.editProfile(user, session.token)
                .then(function () {
                    $scope.successfulEdit = true;
                }, function () {
                    $scope.successfulEdit = false;
                })
        };

        $scope.showModal = function () {
            if ($scope.userProfile.$valid && $scope.orderForm.$valid) {
                editProfile($scope.user);
                $scope.modalVisible = true;
            }
        };
    }
})();
