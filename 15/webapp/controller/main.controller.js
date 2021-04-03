//scaffolding template
sap.ui.define(["sap/ui/core/mvc/Controller"],function(oController){
    return oController.extend("home.main.controller",{
    //hook method - onInit
        onInit:function(){
    //step1 - create the model object
            var oModel = new sap.ui.model.json.JSONModel();
    //step2 - set or load data
           oModel.loadData("model/mockData.json");
           //setData - we can give the entire JSON content 
    //step3 - link the model to the application/view/control so that they are aware   
           sap.ui.getCore().setModel(oModel);
           //this.getView().setModel(oModel);
           //this.getView().byId("")
    /*step 4 - there are 4  syntaxes - 2 at view level and 2 at controller level */
            this.getView().byId("salary").bindValue('/empStr/salary');
            this.getView().byId("currency").bindProperty("value","/empStr/currency");
        }
    });
});