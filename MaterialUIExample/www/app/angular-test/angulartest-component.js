(function () {
    angular.module('angular.test')
        .component("angularTest", {
            templateUrl: "app/angular-test/angulartest-template.html",
            controller: ['$routeParams', '$scope', function ($routeParams, $scope) {
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
               
                };
                this.setSlected = function (index) {
                  
                    var selected = this.products[index];
                    $routeParams.prodname = selected.productsname;
                    window.location.href = '#!/products/' + index;
                }
            }]
        });
})();




