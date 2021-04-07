sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){ //load UI Component
        return UIComponent.extend("sap.ui.demo.Component",{ //here give the full name
            //it has four sections
            metadata:{},

            //call super class
            init:function(){
                UIComponent.prototype.init.apply(this);
            },
            //create view here
            createContent:function(){
                var oView = new sap.ui.core.mvc.XMLView("",{
                    viewName : "sap.ui.demo.view.App",
                    type     : "XML"
                });
                oView.placeAt("content");
            },
            destroy:{}
        });
    }
);