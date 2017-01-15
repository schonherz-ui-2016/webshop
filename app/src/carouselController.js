(function () {

    angular
        .module('webshopModule')
        .controller('carouselCtrl', function ($scope) {
            $scope.setActive = function (element) {
                var thisElem = angular.element(element);
                if (!thisElem.hasClass('active')) {
                    thisElem.addClass('active');
                    thisElem.siblings().removeClass('active');
                }
            }
        });
})();
