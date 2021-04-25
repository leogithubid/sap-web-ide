sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(Controller){
        return Controller.extend("sap.ui.demo.controller.viewOne",{
            init:function(){
                var oRouter = this.getOwner
            },
            onItemPress:function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                //console.log(sPath); // this gives /fruits/2
                var sIndex = sPath.split("/")[2];
                //console.log(sIndex);
                var oRouter = this.getOwnerComponent().getRouter();
                //console.log(oRouter);
                oRouter.navTo("details",{
                    fruitId : sIndex
                })            
            }
        });
    }
);
