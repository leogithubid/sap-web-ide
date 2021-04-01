sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        return oController.extend("home.main.controller",{
            //HOOK Methods
            onInit:function(){
                alert("I am onInit");
            },
            onExit:function(){
                alert("I am onExit");
            },
            onBeforeRendering:function(){
                alert("I am onBeforeRendering");
            },
            onAfterRendering:function(){
                alert("I am onAfterRendering");
            },
            //Button Click Event Handler Method - with Event Object
            //This has methods like getSource(),getParameters(),getParameter
            onClick:function(oEvent){
                alert("Welcome to UI5");
                console.log(oEvent);
                console.log(oEvent.getSource());
                console.log(oEvent.getParameters());
                console.log(oEvent.getParameter("id"));
            }
        })
    }
);