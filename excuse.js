
function aleatoria ()
{

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

var palabra1= Math.floor(Math.random()*who.length); //recuerda que es posicion
var palabra2= Math.floor(Math.random()*what.length); //recuerda que es posicion
var palabra3= Math.floor(Math.random()*when.length); //recuerda que es posicion

var frase=who[palabra1]+" "+what[palabra2]+" "+when[palabra3];
document.getElementById("excuse").innerHTML = frase; //inserta en el html, muestra, imprime

return frase;

}



console.log(aleatoria());