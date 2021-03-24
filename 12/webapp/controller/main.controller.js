//remember scaffolding template
/* sap.ui.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
}); */
sap.ui.define(
    ["sap/ui/core/mvc/Controller"], //load the dependencies from sap ui5 libraries
    function(oController){ //returns the object of controller to the call back function
        return oController.extend("home.controller.main",{

        }); //inherit the sap ui controll
    }
);
