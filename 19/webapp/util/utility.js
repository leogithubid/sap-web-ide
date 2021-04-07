sap.ui.define(
    [ "sap/ui/core/format/NumberFormat"], function(NumberFormat){
            //formatter currency
        return {
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
            }

        };
    }
);