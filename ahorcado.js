String.prototype.replaceAt=function(index, character){ 
    return this.substr(0, index) + character + this.substr(index+character.length); 
}

var palabras = ['GOKU', 'SPIDERMAN', 'THOR', 'VEGETA', 'GOHAN', 'VENOM', 'HAWKEYE', 'MEPHISTO', 'FREZZA', 'CELL', 'BILLS', 
'BUU', 'KRILIN','KAIOSAMA', 'PICOLLO', 'BROLY', 'HULK', 'FALCON', 'BARDOCK'];
var palabra = palabras[Math.floor(Math.random()*palabras.length)];
var reemplazar = palabra.replace(/./g, "_ ");
document.getElementById("guiones").innerHTML = reemplazar;
var contadorFallos = 0;

document.getElementById("button").addEventListener("click", function(){
    var letra = document.getElementById("input-letra").value;
    var fallo = true; 
    letraMayuscula = letra.toUpperCase();

    for(var i in palabra){
        if (letraMayuscula == palabra[i]){
            reemplazar = reemplazar.replaceAt(i*2, letraMayuscula);
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
            document.querySelector("#perdedor").style.display = 'flex';    
        }
    }else{
        if(reemplazar.indexOf('_')< 0){
            document.querySelector("#ganador").style.display = 'flex';
        }
    }   
    document.getElementById("guiones").innerHTML = reemplazar;
    document.getElementById("input-letra").value = '';
    document.getElementById("input-letra").focus();
})