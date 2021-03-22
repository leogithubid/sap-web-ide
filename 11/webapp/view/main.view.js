sap.ui.jsview("root.view.main",{
    getControllerName:function(){
        return "root.controller.main"
        },
    createContent:function(oController){
        var oButton = new sap.m.Button("buttonClickMe",{
            text : "Click Me",
            press : function(){
                                alert("Hello! How are you?" );
            }
        });
        return oButton;
        }
}
);






