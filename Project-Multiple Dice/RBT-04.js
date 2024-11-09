document.getElementById(`roll`).onclick=function(){
    let x=Number(document.getElementById(`value`).value);
    let y=[];
    let im=[];
    

 
    
    for( i=1;i<=x;i++){
        let random=Math.floor((Math.random()*6)+1);
        y.push(random);
        im.push(`<img src="${random}.png">`)

      
        
       
            
    }
    document.getElementById(`res`).textContent= y;
    document.getElementById(`res1`).innerHTML=`${im.join(" ")}`;


        
       
            
            
           


            
            
            

        

    
    

}
