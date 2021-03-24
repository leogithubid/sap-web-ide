sap.ui.jsview("home.view.main",{
//two methods
getControllerName:function(){
//return the address of the controller
    return "home.controller.main"; //return address of the controller
},
createContent:function(){
//create the view content here ie, buttons
    var oButton = new sap.m.Button("idButton",{
        text : "Click me",
        press : function(){
            alert("You clicked me");
        }
    });
    //don't forget to return the objects
    return oButton;
},
}
);