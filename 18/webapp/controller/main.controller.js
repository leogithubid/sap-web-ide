sap.ui.define(
    //load the dependency for controller and then call the call back function
    ["sap/ui/core/mvc/Controller",
    //load the new dependency ie, model.js file
    "home/model/model"
    ],function(oController,modelJS){
        //return the id of the contoller 
        return oController.extend("home.main.controller",{
            //inside this use all the HOOK methods
            onInit:function(){
                //remember the 3 step process for models
                //1-create the model 
                var oModel = new sap.ui.model.json.JSONModel();
                //2-load data to the model with filepath
                oModel.loadData("model/mockData/mockData.json");
                //3-set the model to the core
                sap.ui.getCore().setModel(oModel);
                //now we can go and create binding in the view xml
                //by the way I can create and set another model. 
                //This is called named-model. The model created above is the default model 
                //as we didn't give it any id

                /*Resource Model */
                var oModelResource = modelJS.createResourceModel("i18n/i18n.properties");
                sap.ui.getCore().setModel(oModelResource,"i18n");
            },
            //Flip flop function
            flipFlop:function(){
                //create JSON Model from second json file using the function in model.js file
                var oModel2 = modelJS.createJSONModel("model/mockData/mockData2.json");
                //set the data to the core
                sap.ui.getCore().setModel(oModel2);
                var oModel3 = modelJS.createXMLModel("model/mockData/mockData3.xml");
                sap.ui.getCore().setModel(oModel3);
            }
        });
    }
);