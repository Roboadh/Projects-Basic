document.getElementById(`Cel`).onclick=function(){
    let x=Number(document.getElementById(`Lekh`).value)
    let y= (x+0)*(180/100)+32;
    y= y.toFixed(2)
    document.getElementById(`res`).textContent= ` ${y}F`;

}
document.getElementById(`fah`).onclick=function(){
    let x=Number(document.getElementById(`Lekh`).value)
    let y=((x-32)*(100/180));
    y= y.toFixed(2)
    document.getElementById(`res`).textContent= `${y}C`;


}