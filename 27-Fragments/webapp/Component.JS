sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            metadata:{
                manifest : "json"
            },
            init:function(){
                //instantiate base class
                UIComponent.prototype.init.apply(this);
                //initialise router
                var oRouter = this.getRouter();
                oRouter.initialize();
            }
        });
    }
);