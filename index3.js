let cartas= Number(prompt("Quantas cartas voce quer sortear?"))
let i=0
let num=0
let naipe=0


while(i<cartas){

    num =Math.floor(Math.random() * 9 )+1 
    
    naipe=Math.floor(Math.random()*4)

    if(naipe == 0){
        naipe = "copas"
     }
     else if(naipe==1){

        naipe="ouros"

     }
     else if(naipe==2){

        naipe="espadas"

     }
     else {

        naipe="paus"
     }

 

     console.log(`Carta: ${num} de ${naipe}`);

     i++
}
