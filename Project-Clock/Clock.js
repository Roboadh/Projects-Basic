function time(){
    const date= new Date();
let hours=date.getHours();
let med= hours>=12 ? "PM":"AM"
hours = hours %12||12
let hour=hours.toString().padStart(2,0);



const min=date.getMinutes().toString().padStart(2,0);
const sec=date.getSeconds().toString().padStart(2,0);
const full=`${hour}:${min}:${sec} ${med}`;
document.getElementById(`man`).textContent=full;}
time();
setInterval(time,1000);