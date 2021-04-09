sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("sap.ui.demo.viewOne",{
            goBack:function(){
                var oView = this.getView().getParent();
                oView.to("viewOne");                
            }
        });
});