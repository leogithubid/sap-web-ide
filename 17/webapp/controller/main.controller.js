sap.ui.define(
    ["sap/ui/core/mvc/Controller","home/model/model"],function(oController,modelJS){
        return oController.extend("home.main.controller",{
            onInit:function(){
                var oModelOne = modelJS.createModel("model/mockdata.json");
                sap.ui.getCore().setModel(oModelOne);
                var oModelTwo = modelJS.createModel("model/mockdata2.json");
                sap.ui.getCore().setModel(oModelTwo,"modelTwo");
            },
            flipData:function(){
                var oModel = sap.ui.getCore().getModel();
                console.log(oModel);
            }
        });
    }
);
