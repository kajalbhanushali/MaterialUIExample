(function () {
    angular.module('menu.app')
        .component("menuComponent", {
            templateUrl: "app/menu/menu-template.html",
            controller: ['$routeParams', '$scope', function ($routeParams, $scope) {

                         app.initialize();
                this.navItem = [

                    {
                        navName: "Settings"
                    },
                    {
                        navName: "About Gallagher"
                    },
                    {
                        navName: "Products"
                    },
                    {
                        navName: "Feedback"
                    },
                    {
                        navName: "privacyPolicy"
                    },
                    {
                        navName: "Terms Of use"
                    },
                    {
                        navName: "Contacts"
                    },
                    {
                        navName: "Log out"
                    }
                ]
            }]
        });
})();




