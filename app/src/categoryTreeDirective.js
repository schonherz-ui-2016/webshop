(function () {
    angular
        .module('webshopModule')
        .directive('tree', CategoryTreeDirective);

    function CategoryTreeDirective() {
        return {
            template: `
      <div>
        <div ng-click="node.open = !node.open; $emit('nodeSelected', node)" class="node hvr-skew-forward" ng-class="{active: selected == node}">
          <span ng-if="node.categories.length">
            <span ng-if="!node.open">+</span>
            <span ng-if="node.open">-</span>
          </span>
          {{ node.name }}
        </div>
        <ul ng-if="node.open" ng-repeat="category in node.categories">
          <tree node="category" selected="selected"></tree>
        </li>
      </div>
    `,
            scope: {
                node: '<',
                selected: '<'
            }
        };
    }
})();
