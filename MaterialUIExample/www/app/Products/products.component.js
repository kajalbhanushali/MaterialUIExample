(function () {
    angular.module('products')
        .component("products", {
            templateUrl: "app/products/products.template.html",
            controller: ['$routeParams', '$scope', function ($routeParams, $scope) {
                this.productslist = [
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
                    }];

                $scope.selectedItem;
                if ($routeParams.id) {
                    var selected = this.productslist[$routeParams.id];
                    $scope.selectedItem = selected.productsname;
                }

                this.setSelected = function (index) {
                    this.selected = this.productslist[index];
                    console.log(this.selected);
                };
                this.getSelectedText = function () {
                    debugger
                    if (this.selectedItem !== undefined) {
                        return "You have selected: Item " + this.selectedItem;
                    } else {
                        return "Please select an item";
                    }
                };

            }]
        });
})();