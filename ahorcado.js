String.prototype.replaceAt=function(index, character){ 
    return this.substr(0, index) + character + this.substr(index+character.length); 
}

var palabras = ['goku', 'spiderman', 'thor', 'vegeta', 'gohan', 'venom'];
var palabra = palabras[Math.floor(Math.random()*palabras.length)];
var reemplazar = palabra.replace(/./g, "_ ");
document.getElementById("guiones").innerHTML = reemplazar;

document.getElementById("button").addEventListener("click", function(){
    var letra = document.getElementById("input-letra").value;
    var fallo = true;
    var contadorFallos = 0;

    for(var i in palabra){
        if (letra == palabra[i]){
            reemplazar = reemplazar.replaceAt(i*2, letra);
            fallo = false;
        }
    }
    if(fallo){
        contadorFallos++;
        if(contadorFallos == 4){
            alert("perdiste bro");
        }
    }else{
        if(reemplazar.indexOf('_')< 0){
            alert("ganaste");
        }
    }   
    document.getElementById("guiones").innerHTML = reemplazar;
    document.getElementById("input-letra").value = '';
    document.getElementById("input-letra").focus();
})