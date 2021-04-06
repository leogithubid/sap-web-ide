sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/json/JSONModel"
], function(ResourceModel,JSONModel) {
    return {
        createResourceModel : function(filePath){
            var oResourceModel = new sap.ui.model.resource.ResourceModel({
                bundleUrl : filePath
            });
            return oResourceModel;
        },
        createJSONModel: function(filePath){
            var oJSONModel = new sap.ui.model.json.JSONModel();
            oJSONModel.loadData(filePath);
            return oJSONModel;
        }
    };
});