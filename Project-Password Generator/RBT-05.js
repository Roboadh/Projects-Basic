function Generatepassword(Lengt,Lowercasee,Uppercase,Symbol,Numbers  ){
    const Lower= "abcdefghijklmnopqrstuvwxyz";
    const Upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Sym= "!@#$%^&*()/*-+";
    const Num= "0123456789";
    let accept= " ";
    let result= " ";
    if(Lowercasee){
        accept+=Lower;

    }
    if(Uppercase){
        accept+=Upper;

    }
    if(Symbol){
        accept+=Sym;

    }
    if(Numbers){
        accept+=Num;
    }
    console.log(accept)
    if(Lengt===0){
        window.alert("Please assign any value")
    }
   if(accept.length===0){
    window.alert("please enter any condition")
   }

   for(let i=1;i<Lengt;i++){
   let x=Math.floor(Math.random()*accept.length)
   result+=accept[x];
   }
   
    
   


    return result;
}
const Lengthh=10;
const Lowercase=true;
const Uppercase=true;
const Symbol=false;
const Numbers=true;



const ram= Generatepassword(Lengthh,Lowercase,Uppercase,Symbol,Numbers);
document.getElementById(`gen`).onclick=function(){
document.getElementById(`res`).textContent=ram;
}









