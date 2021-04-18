sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        oController.extend("sap.ui.demo.controller.viewOne",{
            onInit:function(){

            },
            onNext:function(selectedPath){
                //get App view
                var oApp = this.getView().getParent();
                //point App view to page two
                oApp.to("viewTwo");
                //get Pages
                var oView1 = oApp.getPages()[0];
                //console.log(oView1);
                var oView2 = oApp.getPages()[1];
                //console.log(oView2);
                //get contents of page two
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
            },
            onPress:function(oEvent){
                //console.log(oEvent.getParameter("listItem").getBindingContextPath());
                this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
            }
        })
    }
);