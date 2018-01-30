(function () {
    angular.module('products')
        .component("products", {
            templateUrl: "app/products/products.template.html",
            controller: function () {
                this.productslist = [
                    {
                        productsname: "cyber security"
                    },
                    {
                        productsname:"Risk Management"
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
                        productsname:"crisis resilence"
                    }

                    
                ];
                this.selectedItem;
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
            }
        });
})();