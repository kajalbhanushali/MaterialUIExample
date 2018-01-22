(function () {
    "use strict";

    angular.
        module('pap').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider.
                    when('/', {
                        template: '<hexagon-component></hexagon-component>'
                    }).
                    otherwise('/index');
            }
        ]);
})();