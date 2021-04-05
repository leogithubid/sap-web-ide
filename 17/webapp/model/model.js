sap.ui.define(
    ["sap/ui/model/json/JSONModel"],function(JSONModel){
        return {
            createModel:function(filePath){
                var oModel = new JSONModel();
                oModel.loadData(filePath);
                return oModel;
            }
        }
        ;
    }
);