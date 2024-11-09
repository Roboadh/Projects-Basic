
const display=document.getElementById(`Display`);
 function update(valu){
    display.value +=valu;
    // display.textContent=display.value
 }
 function Clear(){
    display.value= "";
 }
 function Result(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
       setInterval(()=>   Clear(),2000)
        
    }
    

 }
 function exception(){
    let rem=display.value
    display.value=rem.slice(0,-1)
 }
 function calculatePercentage() {
    let currentDisplay = display.value;

    // If the display has a number, we calculate percentage of that number
    if (currentDisplay !== '') {
        let result = parseFloat(currentDisplay) / 100;
        // result=result.slice(0,2)
        display.value=result;
    }
}
function update(value) {
    if (value === '%') {
        // If the user presses %, we call the percentage function
        calculatePercentage();
    } else {
        // Otherwise, just add the value as normal
        let currentDisplay = display.value;
        display.value = currentDisplay + value;
    }
}