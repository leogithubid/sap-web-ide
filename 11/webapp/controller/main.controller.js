/* //scaffolding template
/* sap.ui.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
}); */
sap.ui.define(
//load dependencies one by one - here get the controller 
    [
        "sap/ui/core/mvc/Controller"
    ],
//return address of the controller
    function(oController){ //call back function -> the above line will pass the controller object 
        return oController.extend("home.controller.main",{

        });
    } 
); 