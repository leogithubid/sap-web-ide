sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function(UIComponent){
        return UIComponent.extend("sap.ui.demo.Component",{
            init:function(){
                UIComponent.prototype.init.apply(this);
            },
            createContent:function(){
                var appView = new sap.ui.core.mvc.XMLView("appView",{
                    viewName : "sap.ui.demo.view.App",
                    type : "XML"
                });
                var viewOne = new sap.ui.core.mvc.XMLView("viewOne",{
                    viewName : "sap.ui.demo.view.viewOne",
                    type : "XML"
                });
                var viewTwo = new sap.ui.core.mvc.XMLView("viewTwo",{
                    viewName : "sap.ui.demo.view.viewTwo",
                    type : "XML"
                });
                appView.byId("idApp").addPage(viewOne).addPage(viewTwo);
                return appView;
            },
            destroy:function(){

            }
        });
});