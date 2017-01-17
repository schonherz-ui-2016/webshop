(function () {

    angular
        .module('webshopModule')
        .controller('carouselController',
            function ($scope, $interval) {
                $scope.active = 0;

                var unsubscribe = $interval(nextSlide, 15000);

                $scope.$on('$destroy', function () {
                    unsubscribe()
                });

                function nextSlide() {
                    $scope.active = ($scope.active + 1) % 3;
                }
            })

})();
