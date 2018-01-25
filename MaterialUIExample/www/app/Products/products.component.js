(function () {
    angular.module('products')
        .component("products", {
            templateUrl: "app/products/products.template.html",
            controller: function () {
                this.products = [
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

                this.setSelected = function (index) {
                    this.selected = this.products[index];
                    console.log(this.selected);
                };
            }
        });
})();