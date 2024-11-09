let countP=0;
let countC=0;
let tot=0;
let draw=0;
function roll(val) {
    let comp = ["Rock", "Paper", "Scissor"];
    let Computer = Math.floor(Math.random() * 3)
    comp = comp[Computer]
    let res = " ";
   
    if (val === comp) {
        res = "Its a Draw"
       

    }
    else{
     if (val === "Rock") {
        if (val === "Rock" && comp === "Scissor") {
            res = "YOU WIN"
            


        }
        else {
            res = "YOU LOOSE"
            
        }
    }




    else if (val === "Paper") {
        if (val === "Paper" && comp === "Rock") {
            res = "YOU WIN"
            

        }
        else {
            res = "YOU LOOSE"
            
        }
    }
    else if (val === 'Scissor') {
        if (val === "Scissor" && comp === "Paper") {
            res = "YOU WIN"
            

        }
        else {
            res = "YOU LOOSE"
            
        }
    }
}

    document.getElementById(`Player`).textContent = val;
    document.getElementById(`Comp`).textContent = comp;
    document.getElementById(`lekh`).textContent = res;
    lekh.classList.remove("green","red");




    
    if(res==="YOU WIN"){
        lekh.classList.add("green");
       countP=countP+1;
       document.getElementById(`YC`).textContent=countP;

    }
    else if(res==="YOU LOOSE"){
        lekh.classList.add("red")
        countC++;
        document.getElementById(`CC`).textContent=countC;

    }
    tot++;
    document.getElementById(`tot`).textContent=tot;

    draw=tot-(countP+countC);
    document.getElementById(`dr`).textContent=draw;
    
    
}

