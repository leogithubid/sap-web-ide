sap.ui.jsview("home.view.main",{
//two methods
getControllerName:function(){
//return the address of the controller
    return "home.controller.main"; //return address of the controller
},
createContent:function(oController){ //object of the controller passed from the controller
//create the view content here ie, buttons
    var oInput = new sap.m.Input("idInput",{
        placeholder : "Enter your text here"
    });
    var oButton = new sap.m.Button("idButton",{
        text : "Click me",
        //move this function to controller
/*         press : function(){
            alert("You clicked me");
        } */
        press : oController.welcome //controller object. method
    });
    //don't forget to return the objects
    return [oInput,oButton];
},
}
);