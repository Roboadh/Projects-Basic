let count=0;
document.getElementById("dec").onclick=function(){
    count-=1;
    document.getElementById("score").textContent= count;
}
document.getElementById("inc").onclick = function() {
    count += 1;
     document.getElementById("score").textContent = count;
 }

 document.getElementById("res").onclick = function() {
     count = 0;
     document.getElementById("score").textContent = count;
 }
 














