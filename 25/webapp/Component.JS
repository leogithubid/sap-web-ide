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
            },
            createContent:function(){
                //create views
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
                //get split App container
                var splitApp = appView.byId("splitApp");
                // add Master page and Detail Page
                splitApp.addMasterPage(viewOne);
                splitApp.addDetailPage(viewTwo);
                return appView;
            }
        });
    }
);