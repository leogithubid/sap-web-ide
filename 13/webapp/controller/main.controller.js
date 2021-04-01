//scaffolding template
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(oController) {
    return oController.extend("home.controller.main", {
        onClick:function(){
            var oView = this.getView();
            var oInput = oView.byId("inputUserName").getValue();
            var oPassword = oView.byId("inputPassword").getValue();
            if (oInput == "admin" & oPassword =="welcome"){
                alert("Welcome to UI5");
            }
            else {
                alert("Incorrect Username or Password");
            }
        }
    });
    
}); 