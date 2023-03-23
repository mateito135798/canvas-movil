var ultima_posicion_x;
var ultima_posicion_y;
var actual_posicion_x;
var actual_posicion_y;
var canvas=document.getElementById("MyCanvas");
var ctx= canvas.getContext("2d");
var color="orange";
var ancho_linea=1;
var ancho_pantalla=screen.width;
var nuevo_ancho=screen.width-70;
var nuevo_alto=screen.height-300;
if (ancho_pantalla<992) {
    canvas.width=nuevo_ancho;
    canvas.height=nuevo_alto;
    
}
canvas.addEventListener("touchstart",jaguar);
function jaguar(e){
 ultima_posicion_x= e.touches[0].clientX-canvas.offsetLeft;
ultima_posicion_y= e.touches[0].clientY-canvas.offsetTop; 
}
canvas.addEventListener("touchmove",pantera);
function pantera(e){
    actual_posicion_x= e.touches[0].clientX-canvas.offsetLeft;
    actual_posicion_y= e.touches[0].clientY-canvas.offsetTop; 

 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=ancho_linea;
 ctx.moveTo(ultima_posicion_x,ultima_posicion_y);
 ctx.lineTo(actual_posicion_x,actual_posicion_y);
 ctx.stroke();
  

ultima_posicion_x=actual_posicion_x;
ultima_posicion_y=actual_posicion_y;
}
