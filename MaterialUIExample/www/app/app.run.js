(function () {
    "use strict";

    angular.module("pap").run(["nativeService", runBlock]);

    function runBlock(nativeService) {
//debugger
        nativeService.initListners();
        
    }
    
})();