const display=document.getElementById("display");

function appendto(input){
display.value  += input;
}

function clearIn(){
display.value ="";
}

function calculate(){
    try{
    display.value=eval(display.value);
    }catch{
        display.value="Error";
    }
}
