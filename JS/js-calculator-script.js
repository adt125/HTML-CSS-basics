function clearScreen(){
    document.getElementById("disp").value="";
}
function show(value){
    document.getElementById("disp").value+=value;
}
function calculate(){
    let p=document.getElementById("disp").value;
    let ans=eval(p);
    document.getElementById("disp").value=ans;
}
function backspace(){
    let str= document.getElementById("disp").value;
    str=str.substring(0, str.length - 1);
    document.getElementById("disp").value=str;
}