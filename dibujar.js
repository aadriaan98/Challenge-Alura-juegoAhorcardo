var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "transparent";
pincel.fillRect(0,0,800,600);
var letraEquivocada = [];
var letraErrada = "";

function dibujarTexto(texto,x,y){
    pincel.beginPath();
    pincel.font = "25pt Verdana";
    pincel.fillStyle = "black";
    pincel.fillText(texto,x,y);
}

function dibujarLetraIncorrecta(letraIncorrecta){
    
    letraEquivocada.push(letraIncorrecta)
    letraErrada = letraEquivocada.join(" ");
    dibujarTexto(letraErrada, 400, 100);
    
}

function dibujarBase(){
    //Dibujo de la base
    pincel.fillStyle = "black";
    pincel.fillRect(50, 550, 75, 35);
    pincel.moveTo(25,590);
    pincel.lineTo(50,550);
    pincel.lineTo(50,590);
    pincel.fill();

    pincel.moveTo(150,590);
    pincel.lineTo(125,550);
    pincel.lineTo(125,590);
    pincel.fill();

    //Mastil
    pincel.fillStyle = "black";
    pincel.fillRect(75, 300, 25, 250);

    pincel.fillStyle = "black";
    pincel.fillRect(75, 50, 25, 250);

    pincel.fillStyle = "black";
    pincel.fillRect(75, 50, 200, 25);

    pincel.fillStyle = "black";
    pincel.fillRect(270, 50, 10, 150);
};

function dibujarCabeza(){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(275, 240, 40,0,Math.PI * 2);
    pincel.fill();
    pincel.beginPath();
    pincel.fillStyle = "black";
};

function dibujarTorso(){
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.fillRect(270, 280, 10, 125);
};

function dibujarBrazoIzq(){
    pincel.moveTo(275,290);
    pincel.lineTo(185,235);
    pincel.lineTo(185,245);
    pincel.lineTo(275,300);
    pincel.fill();
};

function dibujarBrazoDer(){
    pincel.moveTo(280,290);
    pincel.lineTo(375,230);
    pincel.lineTo(375,240);
    pincel.lineTo(280,300);
    pincel.fill();
};

function dibujarPiernaIzq(){
    pincel.moveTo(270,400);
    pincel.lineTo(175,475);
    pincel.lineTo(175,480);
    pincel.lineTo(270,410);
    pincel.fill();
};

function dibujarPiernaDer(){
    pincel.moveTo(270,400);
    pincel.lineTo(375,475);
    pincel.lineTo(375,480);
    pincel.lineTo(270,410);
    pincel.fill();
};
