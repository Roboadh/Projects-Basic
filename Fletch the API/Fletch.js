
    
    
    async function Naya() {
        try{
            let Store=document.getElementById(`In`).value.toLowerCase();
        
            const Val= await fetch(`https://pokeapi.co/api/v2/pokemon/${Store}`)
            
            if(!Val.ok){
                throw new Error("Please enter Valid Pokemon");
            }
           
            const Data= await Val.json();
            const Pho=Data.sprites.front_default;
            document.getElementById("Photos").src=Pho;
            document.getElementById("Photos").style.display="block";
            
            
    
        }
       
    
        catch(error){
            console.error(error)
    
        }
        
    }

