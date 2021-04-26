sap.ui.define(["sap/ui/core/mvc/Controller"],function(oController){
    return oController.extend("sap.ui.demo.viewOne",{
        onInit:function(){
            var oRouter = this.getOwnerComponent().getRouter();
            console.log(oRouter);
        },
        onItemPress:function(oEvent){
            var sPath = oEvent.getParameter("listItem").getBindingContextPath();
            var sIndex = sPath.split("/")[2];
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("details",{
                fruitId : sIndex
            });
        }
    });
});