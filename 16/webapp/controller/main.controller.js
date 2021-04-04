//scaffolding template
/* ap.ui.define(["sap/ui/core/mvc/Controller"],function(oController){
    return oController.extend("home.main.controller",{
    //hook method - onInit
        onInit:function(){
        }
    });
}); */

sap.ui.define(
    ["sap/ui/core/mvc/Controller"],function(oController){
        return oController.extend("home.controller.main",{
            onInit:function(){
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("model/mockData.json");
                sap.ui.getCore().setModel(oModel);
            }
        });
    }
);

