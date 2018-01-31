(function () {
    angular.module('menu')
        .component("menuComponent", {
            templateUrl: "app/menu/menu-template.html",
            controller: ['$routeParams', '$scope', function ($routeParams, $scope) {
                $scop.nav = false;
                
            }]
        });
})();




