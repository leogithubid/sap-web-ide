sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(Controller){
        return Controller.extend("sap.ui.demo.controller.viewTwo",{
            onInit:function(){
                //get Router
                var oRouter = this.getOwnerComponent().getRouter();
                //link event handler method
                oRouter.attachRoutePatternMatched(this.showDetails,this);
            },
            showDetails:function(oEvent){
                var sIndex = oEvent.getParameter("arguments").fruitId;
                var sPath = "/fruits/" + sIndex;
                this.getView().bindElement(sPath);
            }
        });
    }
);