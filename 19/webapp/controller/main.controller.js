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
            }
        });
    }
);