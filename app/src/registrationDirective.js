(function () {
    angular
        .module('webshopModule')
        .directive('passwordMatch', function () {
            return {
                restrict: 'A',
                scope: true,
                require: 'ngModel',
                link: function (scope, elem, attrs, control) {
                    var checker = function () {
                        var pwd1 = control.$modelValue;
                        var pwd2 = scope.$eval(attrs.passwordMatch);
                        return pwd1 == pwd2;
                    };
                    scope.$watch(checker, function (val) {
                        control.$setValidity("unique", val);
                    });
                }
            };
        });
})();
