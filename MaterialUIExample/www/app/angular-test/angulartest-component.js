(function () {
    angular.module('angular.test')
        .component("angularTest", {
            templateUrl: "app/angular-test/angulartest-template.html",
            controller: ['$routeParams', '$location', '$window', function ($location, $window, $routeParams) {
                this.products = [
                    {
                        productsname: "cyber security"
                    },
                    {
                        productsname: "Risk Management"
                    },
                    {
                        productsname: "Premium Finanace"
                    },
                    {
                        productsname: "Buisness Assist"
                    },
                    {
                        productsname: "Terrorism Insurance"
                    },
                    {
                        productsname: "crisis resilence"
                    }


                ];

                this.download = function () {
                   alert("downloading");
                };
                this.setSlected = function (index) {
                    debugger
                    var selected = this.products[index];
                    console.log(selected);
                    console.clear();
                    window.location.href = '#!/products/';
                }
            }]
        });
})();




