(function () {
    "use strict";

    angular.
        module('pap').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                //debugger
                $locationProvider.hashPrefix('!');
                $routeProvider.
                    when('/', {
                        template: '<hexagon-component></hexagon-component>'
                    }).when('/page1', {
                        template:'<page-one></page-one>'
                       /* templateUrl: 'page1/page1.template.html'//*///actual location will vary according to your local folder structure
                        //controller: 'AppCtrl'
                    }).when('/page2', {
                        template:'<page-two></page-two>'
                        //templateUrl: 'page-two/page-two.template.html'//,
                        //controller: 'AppCtrl'
                    }).when('/page3', {
                        template:'<page-three></page-three>'
                        //templateUrl: 'page-three/page-three.template.html'//,
                        //controller: 'AppCtrl'
                    }).when('/testinomials', {
                        template:'<products-component></products-component>'
                    }).when('/products', {
                        template: '<products></products>'
                    }).when('/allproducts', {
                        template: '<angular-test></angular-test>'
                        //templateUrl: 'angular-test/angulartest-template.html',
                        //controller: 'AppCtrl'

                    }).when('/products/:id', {
                        template: '<products></products>'
                    }).when('/menu', {
                        template: '<menu-component></menu-component>'
                    })
                    .otherwise('/');
            }
        ]);
})();

