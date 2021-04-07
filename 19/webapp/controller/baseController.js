sap.ui.define(
    ["sap/ui/core/mvc/Controller",
      "home/util/utility"],
                                function(oController,UtilityJS){
        return oController.extend("home.controller.baseController",{
                        formatter:UtilityJS,
                        //get Details
                        getDetails:function(oEvent){
                            var sPath = oEvent.getParameter("rowContext").getPath();
                            console.log(sPath);
                            //Element Binding ie, bind the Form Info to the path
                            var empForm = this.getView().byId("empForm");
                            console.log(empForm);
                            empForm.bindElement(sPath);
                        },
        });
    }
);