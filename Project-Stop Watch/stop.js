let start=document.getElementById(`Start`);
let stop=document.getElementById(`Stop`);
let reset=document.getElementById(`Reset`);
let timer=null;
let Start=0;
let spend=0;
let isrun=false

start.onclick=function(){
    if(!isrun){
        Start=Date.now()-spend;
        timer=setInterval(upd,10);
        isrun=true;
    }
    
}
stop.onclick=function(){
    if(isrun){

    clearInterval(timer);
    spend=Date.now()-Start;
    isrun=false
}

}
reset.onclick=function(){
    clearInterval(timer);
    spend=0;
    start=0;
    isrun=false;
    document.getElementById(`Mal`).textContent=`00:00:00`
}


function upd(){
    const ctime=Date.now();
    spendd=ctime-Start;
    let hour=Math.floor(spendd/(1000*60*60));
    let min=Math.floor(spendd/(1000*60)%60);
    let sec=Math.floor(spendd/1000%60);
    // hour=hour.toString.padStart("2",0);

    document.getElementById(`Mal`).textContent=`${hour}:${min}:${sec}`
    

 }
// // Get references to the buttons and the display element
// const startButton = document.getElementById('Start');
// const stopButton = document.getElementById('Stop');
// const resetButton = document.getElementById('Reset');
// const timeDisplay = document.getElementById('Mal');

// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// // Start function
// startButton.onclick = function() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime; // Continue from where we left off
//         timer = setInterval(updateTime, 10); // Update every 10ms
//         isRunning = true;
//     }
// };

// // Stop function
// stopButton.onclick = function() {
//     if (isRunning) {
//         clearInterval(timer); // Stop the timer
//         elapsedTime = Date.now() - startTime; // Store the time when stopped
//         isRunning = false;
//     }
// };

// // Reset function
// resetButton.onclick = function() {
//     clearInterval(timer); // Stop the timer
//     isRunning = false;
//     elapsedTime = 0; // Reset elapsed time
//     timeDisplay.textContent = '0:00:00'; // Reset the display
// };

// // Update the time function
// function updateTime() {
//     const currentTime = Date.now();
//     const totalElapsedTime = currentTime - startTime;
    
//     const hours = Math.floor(totalElapsedTime / (1000 * 60 * 60));
//     const minutes = Math.floor((totalElapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((totalElapsedTime % (1000 * 60)) / 1000);

//     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`; // Update the display
// }
