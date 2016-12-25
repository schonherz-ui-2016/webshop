(function () {
    angular
        .module('webshopModule')

        .controller('headerCtrl', function ($scope, $rootScope, $http, api, loginService) {
            $scope.session  = loginService.getSession();
        });

})();
//console.log(login.getToken());

//login.getToken() == UNDEFINED is true --> error ág not valid email+jelszó -->login, sign up stays
//login.getToken() == NOT UNDEF is false--> valid -> logged in--> login/signup removal --->welcome message

/*
 console.log("sikertelen "+ $scope.unsuccessfulLogin);
 console.log("sikeres"+ $scope.successfulLogin);

 */

