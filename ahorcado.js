String.prototype.replaceAt=function(index, character){ 
    return this.substr(0, index) + character + this.substr(index+character.length); 
}

var palabras = ['GOKU', 'SPIDERMAN', 'THOR', 'VEGETA', 'GOHAN', 'VENOM'];
var palabra = palabras[Math.floor(Math.random()*palabras.length)];
var reemplazar = palabra.replace(/./g, "_ ");
document.getElementById("guiones").innerHTML = reemplazar;
var contadorFallos = 0;

document.getElementById("button").addEventListener("click", function(){
    var letra = document.getElementById("input-letra").value;
    var fallo = true;
    
    document.addEventListener("keydown", function(evento){
        letra = evento.key;
        letraMayuscula = letra.toUpperCase();
    })

    for(var i in palabra){
        if (letra == palabra[i]){
            reemplazar = reemplazar.replaceAt(i*2, letra);
            fallo = false;
        }
    }
    if(fallo){
        contadorFallos++;
        if(contadorFallos == 1){
            dibujarBase();
        }
        if(contadorFallos == 2){
            dibujarCabeza();
        }
        if(contadorFallos == 3){
            dibujarTorso();
        }
        if(contadorFallos == 4){
            dibujarBrazoIzq();
        }
        if(contadorFallos == 5){
            dibujarBrazoDer();
        }
        if(contadorFallos == 6){
            dibujarPiernaIzq();
        }
        if(contadorFallos == 7){
            dibujarPiernaDer();
        }
        if(contadorFallos == 8){
         alert("Perdiste");
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