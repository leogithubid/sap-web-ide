sap.ui.define(["sap/ui/core/mvc/Controller"],function(oController){
    return oController.extend("sap.ui.demo.controller.viewTwo",{
        onInit:function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.showDetails,this);
        },
        showDetails:function(oEvent){
            var fruitId = oEvent.getParameter("arguments").fruitId;
            var sPath = "/fruits/" + fruitId;
            this.getView().bindElement(sPath);
        }
    });
});