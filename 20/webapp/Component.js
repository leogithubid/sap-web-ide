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
                return new sap.m.Button("buttonHello", {
                    text : "Hello Short"
                });
            },
            destroy:{}
        });
    }
);