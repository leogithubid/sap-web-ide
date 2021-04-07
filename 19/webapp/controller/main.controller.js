sap.ui.define(
    ["home/controller/baseController",
      "home/model/model"
    ],function(Controller,ModelJS ){
        return Controller.extend("home.main.controller",{
            onInit:function(){
                 var oJSONModel = ModelJS.createJSONModel("model/mockData/mockData.json");
                var oResourceModel = ModelJS.createResourceModel("i18n/i18n.properties");
                sap.ui.getCore().setModel(oResourceModel,"i18n"); 
                sap.ui.getCore().setModel(oJSONModel);
            } 
/*             getDetails:function(oEvent){
                var sPath = oEvent.getParameter("rowContext").getPath();
                console.log(sPath);
                //Element Binding ie, bind the Form Info to the path
                var empForm = this.getView().byId("empForm");
                console.log(empForm);
                empForm.bindElement(sPath);
            }, */
//            formatter:UtilityJS,
/*             //formatter currency
            This code is moved to Util-Utility.JS
            formatSalary:function(salary,currency ){
                var oCurrencyFormat = NumberFormat.getCurrencyInstance();
                console.log(oCurrencyFormat);
                return oCurrencyFormat.format(salary,currency) ;
                console.log(salary);
                console.log(currency);
            },
            //formatter function
            convertUpperCase:function(inputValue){
                if(inputValue){
                    return inputValue.toUpperCase();
                }
            } */
        });
    }
);