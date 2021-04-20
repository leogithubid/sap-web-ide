/* sap.ui.define(["sap/ui/core/mvc/Controller"],function(oController){
    return oController.extend("sap.ui.demo.controller.viewOne",{
        init:function(){
            //debugger;
        },
        onNext:function(selectedPath){
            //get App view
            //for split App container we need to go one level above so
            debugger;
            var oApp = this.getView().getParent().getParent();
            //point App view to page two
            oApp.to("viewTwo");
            //get Pages
            var oView1 = oApp.getPages()[0];
            //console.log(oView1);
            //as this is split App container we need to use get Detail Pages
            var oView2 = oApp.getDetailPages()[0];
            //console.log(oView2);
            //get contents of page two
            oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
        },
        onPress:function(oEvent){
            //console.log(oEvent.getParameter("listItem").getBindingContextPath());
            debugger;
            this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
        }
    });
}); */