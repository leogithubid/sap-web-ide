sap.ui.define(
    //load JSON dependency
    ["sap/ui/model/json/JSONModel",
    //that returns a JSON reference
    //load XML dependency
    "sap/ui/model/xml/XMLModel",
    //load resource model
    "sap/ui/model/resource/ResourceModel"
],
    function(JSONModel,XMLModel,ResourceModel){
        //return 
        return {
            //a function to create JSON model from the path
            //the code is exactly similar to the one we wrote in controller
            createJSONModel:function(filePath){
                //create json model
                var oModel = new JSONModel();
                //load data from the file path
                oModel.loadData(filePath);
                return oModel;
            },
            //retrun XML Model
            createXMLModel:function(filePath){
                //create XML Model
                var oModel = new XMLModel();
                //load data from the file path
                oModel.loadData(filePath);
                return oModel;
            },
            //return Resource Model
            createResourceModel:function(filePath){
                var oModel = new ResourceModel({
                    bundleUrl : filePath
                });
                return oModel;
            }
        }
    }
);