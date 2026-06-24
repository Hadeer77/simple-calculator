let num1 = document.getElementById("num1");
let num2= document.getElementById("num2");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let clear = document.getElementById("clear");

let result = document.getElementById("result");

function checkInputs () {
    if(num1.value === "" || num2.value === ""){
        result.textContent = "please enter two numbers";
        return false;
    }
    return true;
}

add.onclick = function(){
    if(!checkInputs()) return;
    result.textContent = Number(num1.value)+ Number(num2.value);
};

sub.onclick = function(){
    if(!checkInputs()) return;
    result.textContent = Number(num1.value)- Number(num2.value);
};

mul.onclick = function(){
    if(!checkInputs()) return;
    result.textContent = Number(num1.value)* Number(num2.value);
};

div.onclick = function(){
    if(!checkInputs()) return;
    if(Number(num2.value)===0){
        result.textContent = "Cannot divide by zero"; return;
    }
    result.textContent = Number(num1.value)/ Number(num2.value);
};

clear.onclick = function(){
   num1.value = "" 
   num2.value = ""
   result.textContent ="";

   num1.focus();
};