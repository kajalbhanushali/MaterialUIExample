(function () {
    angular.module('products.component')
        .component("productsComponent", {
            templateUrl: "app/products-component/products-component.template.html",
            controller: function () {
                this.testinomialslist = [
                    {
                        testinomialsname: "Steve Breese",
                        testinomialsdetails: "Group Financial Director",
                        testinomialcontent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget."
                    },
                    {
                        testinomialsname: "Richard Bodicoat",
                        testinomialsdetails: "Group Financial Director",
                        testinomialcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget."
                    },
                    {
                        testinomialsname: "SRussell Kennedy",
                        testinomialsdetails: "Group Financial Director",
                        testinomialcontent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget."
                    }
                ];
                this.setSelected = function (index) {
                    this.selected = this.employees[index];
                    console.log(this.selected);
                };
            }
        });
})();