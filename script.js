let input = document.getElementById('input');
input.value=0;
let str="";
function display(val){
    str+=val;
    input.value=str;
}

function calculate(){
    let exp = input.value;
    exp=eval(exp);
    str=exp;
    input.value=exp;
}

function cleartext(){
     str='';
     input.value=0;
 }