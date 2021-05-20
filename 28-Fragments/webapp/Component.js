sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            //manifest.json in the metadata
            metadata:{
                manifest : "json"
            },
            //initialise the component controller base class
            init:function(){
                UIComponent.prototype.init.apply(this);
            }
        });
    }
);