let ran;
document.getElementById(`Roll`).onclick = function(){
    ran=Math.floor(Math.random()*6)+1;
    document.getElementById(`Nu`).textContent=ran;
}