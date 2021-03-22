sap.ui.define([
"sap/ui/core/mvc/Controller"
], 
function(oMVCController) {
    return oMVCController.extend("root.controller.main",{
        welcome:function(){
            alert("Hello! How are you?" );
}       

    });
}); 