function add(x, y){
    return parseInt(x) + parseInt(y);
};

let subtract = (x, y) => x - y;

function multiply(x, y){
    return x * y;
};

function divide(x,y){
    return x / y;
};

let operand1;
let operand2;
let operator;

function operate(operand1, operand2, operator){

};


function calc(val) {
    document.getElementById("disp").value=val;
}    
    
function val(val) {
    document.getElementById("disp").value+=val;    
}    
function equal() {
    try
     {    
     calc(eval(document.getElementById("disp").value))    
    }    
    catch(e)    
    {    
     calc('Error') }    
} 