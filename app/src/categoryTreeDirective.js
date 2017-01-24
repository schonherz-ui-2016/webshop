(function () {
    angular
        .module('webshopModule')
        .directive('tree', CategoryTreeDirective);

    function CategoryTreeDirective() {
        return {
            templateUrl: './templates/categoryTree.html',
            scope: {
                node: '<',
                selected: '<'
            }
        };
    }
})();
