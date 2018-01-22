(function () {
    "use strict";
    angular.module("hexagon.component")
        .component("hexagonComponent", {
            templateUrl: "app/landing-page/landing-page.template.html",
            //bindings: { name: '@' },
            controller: function () {
                this.myName = 'kajal';
            }
        });
})();