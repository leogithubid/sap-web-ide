sap.ui.define(
    ["sap/ui/core/mvc/Controller",
      "home/model/model"
    ],function(Controller,ModelJS){
        return Controller.extend("home.main.controller",{
            onInit:function(){

                var oJSONModel = ModelJS.createJSONModel("model/mockData/mockData.json");
                var oResourceModel = ModelJS.createResourceModel("i18n/i18n.properties");
                sap.ui.getCore().setModel(oResourceModel,"i18n"); 
                sap.ui.getCore().setModel(oJSONModel);
            },
            getDetails:function(oEvent){
                var sPath = oEvent.getParameter("rowContext").getPath();
                console.log(sPath);
                //Element Binding ie, bind the Form Info to the path
                var empForm = this.getView().byId("empForm");
                console.log(empForm);
                empForm.bindElement(sPath);
            }
        });
    }
);