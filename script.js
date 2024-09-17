let result = document.getElementById("display");
let buttons = document.getElementById("button");


let calculater = (buttons) => {
    result.value += buttons;
}
 
let Result = () =>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("enter the valid input");
    }
}

function clr(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0,-1);
}
