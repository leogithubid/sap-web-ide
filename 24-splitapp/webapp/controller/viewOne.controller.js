sap .ui.define([
"sap/ui/core/mvc/Controller"
], function(Controller) {
    return Controller.extend("sap.ui.demo.controller.viewOne",{
        onNext:function(selectedPath){
            console.log(this.getView());
            console.log(this.getView().getParent());
            console.log(this.getView().getParent().getParent());
            var oApp = this.getView().getParent().getParent();
            var oView2 = oApp.getDetailPages()[0];
            console.log(oView2);
            console.log(oView2.getContent()[0]);
            console.log(oView2.getContent()[0].getContent()[0]);
            oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
        },
        onItemPress:function(oEvent){
            console.log(oEvent);
            console.log(oEvent.getParameter("listItem"));
            console.log(oEvent.getParameter("listItem").getBindingContextPath());
            this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
        }
    });
    
});