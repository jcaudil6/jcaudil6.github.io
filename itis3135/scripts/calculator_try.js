var precal;
var cal;

window.onload =function(){
    document.getElementById("bn1").onclick =shownNum;
    document.getElementById("bn2").onclick =shownNum;
    document.getElementById("bn3").onclick =shownNum;
    document.getElementById("bn4").onclick =shownNum;
    document.getElementById("bn5").onclick =shownNum;
    document.getElementById("bn6").onclick =shownNum;
    document.getElementById("bn7").onclick =shownNum;
    document.getElementById("bn8").onclick =shownNum;
    document.getElementById("bn9").onclick =shownNum;
    document.getElementById("bn0").onclick =shownNum;

    document.getElementById("bnPlus").onclick =add;
    document.getElementById("bnMinus").onclick =subtract;
    document.getElementById("bnMultiply").onclick = multiply;
    document.getElementById("bnDivide").onclick =divide;
    document.getElementById("bnDecimal").onclick = shownNum;
    document.getElementById("bnReset").onclick = clean;
    document.getElementById("bnCalc").onclick = calculate;

}

function shownNum(){
    document.cal_form.textNumber.value += this.value;
}





function add(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Add";
    }
}
function subtract(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Subtract";
    }
}

function multiply(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value ="";
        cal="Multiply";
    }
}

function divide(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Divide";
    }
}




function calculate()
{
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        if(cal == "Add"){
        var total = precal + num;
        document.cal_form.textNumber.value = total;
    }

    if(cal =="Subtract"){
        var total =precal-num;
        document.cal_form.textNumber.value = total;
    }

    if(cal =="Multiply"){
        var total =precal*num;
        document.cal_form.textNumber.value= total;
    }

    if(cal =="Divide"){
        var total =(precal)/(num);
        document.cal_form.textNumber.value = total;
    }
    
}

}

function clean()
{
    document.cal_form.textNumber.value="";
    var precal="";
    var cal ="";
}