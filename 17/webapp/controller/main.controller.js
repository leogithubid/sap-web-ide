sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        return oController.extend("home.main.controller",{
            onInit:function(){
                var oModel = new sap.ui.model.json.JSONModel();
                console.log(oModel);
                oModel.loadData("model/mockdata.json");
                console.log(oModel);
                sap.ui.getCore().setModel(oModel);
                console.log(oModel);
            },
            flipData:function(){
                var oModel = new sap.ui.model.json.JSONModel();
                console.log(oModel);
                oModel.loadData("model/mockdata2.json");
                console.log(oModel);
                sap.ui.getCore().setModel(oModel);
                console.log(oModel);
            }
        });
    }
);
