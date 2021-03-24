sap.ui.jsview("home.view.main",{ //path of the view
//getControllerName -- this returns address of the view
getControllerName:function(){
    return "home.controller.main" ; //--> path of the controller
},
//createContent
createContent:function(oController){ //-->this returns the controller object
               var oButton = new sap.m.Button("idButton",{
                text : "Click Me",
                press : function(){
                    alert("Hello from View !");
                }
            });
            return oButton; //--> return the new button that is created
}
}); 