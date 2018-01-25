//(function () {
//    "use strict";
//    angular.module("hexagon.component")
//        .component("hexagonComponent", {
//            templateUrl: "app/hexagon-component/hexagon-component.template.html",
//            //bindings: { name: '@' },
//            controller: function () {
//                this.myName = 'kajal';
//            }
//        });
//})();

(function () {
    'use strict';

    angular.module('hexagon.component')
        .component("hexagonComponent", {
            templateUrl: "app/hexagon-component/hexagon-component.template.html",
            controller: function () {
                var self = this;
                self.currentNavItem = 'page1';
                self.goto = function (page) {
                    self.status = "Goto " + page;
                };
            }
        });

    
})();

//(function () {
//    'use strict';
//    angular.module('hexagon.component')
//        .component("hexagonComponent", {
//            templateUrl: "app/hexagon-component/hexagon-component.template.html",
//            controller: function ($timeout, $mdSidenav, $log) {
//                var self = this;
//                self.toggleLeft = buildDelayedToggler('left');
//                self.toggleRight = buildToggler('right');
//                self.isOpenRight = function () {
//                    return $mdSidenav('right').isOpen();
//                };

//                /**
//                 * Supplies a function that will continue to operate until the
//                 * time is up.
//                 */
//                function debounce(func, wait, context) {
//                    var timer;

//                    return function debounced() {
//                        var context = self,
//                            args = Array.prototype.slice.call(arguments);
//                        $timeout.cancel(timer);
//                        timer = $timeout(function () {
//                            timer = undefined;
//                            func.apply(context, args);
//                        }, wait || 10);
//                    };
//                }

//                /**
//                 * Build handler to open/close a SideNav; when animation finishes
//                 * report completion in console
//                 */
//                function buildDelayedToggler(navID) {
//                    return debounce(function () {
//                        // Component lookup should always be available since we are not using `ng-if`
//                        $mdSidenav(navID)
//                            .toggle()
//                            .then(function () {
//                                $log.debug("toggle " + navID + " is done");
//                            });
//                    }, 200);
//                }

//                function buildToggler(navID) {
//                    return function () {
//                        // Component lookup should always be available since we are not using `ng-if`
//                        $mdSidenav(navID)
//                            .toggle()
//                            .then(function () {
//                                $log.debug("toggle " + navID + " is done");
//                            });
//                    };
//                }
//            }


//        });
//})();