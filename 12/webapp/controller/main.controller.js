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
            welcome:function(){
              //  alert("Welcome to controller");
              //get the id of the core
              var oCore = sap.ui.getCore();
              //get the user input
              var oInput = oCore.byId("idInput");
              //get the value
              var userInput = oInput.getValue();
              //get id of the button
              var oButton = oCore.byId("idButton");
              //set Text
              oButton.setText("Controller speaking");
              alert(userInput);            }
        }); //inherit the sap ui controll
    }
);
