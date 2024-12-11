let input=document.getElementById("inputCity")
 let Sub=document.getElementById("submit")
 let Cont=document.getElementById("contents")
 const api="3cb7f8c9f75ea180773c6b539e81a875";


Sub.onclick= async function (){
        let cityName=input.value;
        console.log(cityName);
    
        

        // if(cityName){
            // try{
                const disCity= await Cityinfo(cityName);
                console.log(disCity)
              

            // }
            // catch{
                // console.error("Please Enter again");

            }

        // }
        


    // }

 async function Cityinfo(city) {
    
   const Url=`https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${api}`
   const dat= await fetch(Url);
   console.log(dat);
    
}    
    
