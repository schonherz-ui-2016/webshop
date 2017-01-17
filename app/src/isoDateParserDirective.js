(function () {

    angular
        .module('webshopModule')
        .directive('isoDateParser', isoDateParserDirective);

    function isoDateParserDirective() {
        return {
            require: '^ngModel',
            link: isoDateParserLink
        }
    }

    function isoDateParserLink($scope, $element, $attrs, $ctrl) {
        $ctrl.$formatters.push(function (modelValue) {
            if (!modelValue) {
                return new Date();
            }
            return new Date(modelValue);
        })
    }
})();
