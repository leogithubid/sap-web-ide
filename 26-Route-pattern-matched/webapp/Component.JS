sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            //link manifest json
            metadata:{
                manifest : "json"
            },
            //instantiate base class
            init:function(){
                UIComponent.prototype.init.apply(this);
                var oRouter = this.getRouter();
                //console.log(oRouter);
                oRouter.initialize();
            },
        });
    }
);