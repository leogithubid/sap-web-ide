sap .ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(Controller) {
        return Controller.extend("sap.ui.demo.controller.viewOne",{
            //this method was crreated to move to next page
            onNext:function(selectedPath){
                //get View container - view One
                console.log(this.getView());
                //split App Master page
                console.log(this.getView().getParent());
                //split App container
                console.log(this.getView().getParent().getParent());
                //get the split App container
                var oApp = this.getView().getParent().getParent();
                //get Detail page
                var oView2 = oApp.getDetailPages()[0];
                console.log(oView2);
                //page Two
                console.log(oView2.getContent()[0]);
                //Object header
                console.log(oView2.getContent()[0].getContent()[0]);
                //Bind it with the selected item
                oView2.getContent()[0].getContent()[0].bindElement(selectedPath);
            },
            onItemPress:function(oEvent){
                //get event
                console.log(oEvent);
                //get the item selected
                console.log(oEvent.getParameter("listItem"));
                //get its pathh
                console.log(oEvent.getParameter("listItem").getBindingContextPath());
                //call the above method
                this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
            }
        });
        
    });