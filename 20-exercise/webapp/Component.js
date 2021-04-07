sap.ui.define(
    ["sap/ui/core/UIComponent"],function(UIComponent){ //this is UI component
        return UIComponent.extend("sap.ui.demo.Component",{ //return full name
            init:function(){
                UIComponent.prototype.init.apply(this); //super class constructuor?
            },
            createContent:function(){
                var appView = new sap.ui.core.mvc.XMLView("",{
                    viewName : "sap.ui.demo.view.App",
                    type     : "XML"
                }
                );
                var mainView = new sap.ui.core.mvc.XMLView("",{
                    viewName : "sap.ui.demo.view.main",
                    type     : "XML"
                });
                appView.byId("idApp").addPage(mainView);
                return appView;
            }
        });
    }
);