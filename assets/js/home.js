window.addEventListener("load",function(){
// imagenes para galeria
var img =[ '','Piqueo','Internacional','Guisos', 'Coffe-break', 'Servicio', 'Marino'];
var galeria = document.getElementById("images-gallery");
var menuCom = document.getElementById("comida");

for(var i=1;i<img.length;i++){

  var div=document.createElement("div");
  var imagen= document.createElement("img");
  var comida= document.createElement("span");
  imagen.setAttribute("class","galeria");
  imagen.setAttribute("src","assets/img/galeria/"+ img[i] +".jpg");
  comida.innerHTML=img[i];
  imagen.setAttribute("alt",img[i]);
  div.setAttribute("class","imagen");
  comida.setAttribute("class","text");
  div.appendChild(imagen);
  menuCom.appendChild(comida);
  galeria.appendChild(div);
  comida.style.display="none";

}

var modal=document.getElementsByClassName("modal")[0];
var cerrar=document.getElementsByClassName("boton-cerrar")[0];
var imagCont=document.getElementById("images-gallery");//contenedor de imagenes
var imagen=document.getElementById("imagen");//contenido del modal
    imagCont.addEventListener('click',function (e) {
      if (e.target.tagName =="IMG"){
        modal.style.display="block";
        cerrar.style.display="inline-block";
        imagen.src=e.target.src;
      }
    });

cerrar.addEventListener("click",function(){
      cerrar.style.display="none";
      modal.style.display="none";
    });

 var esc = document.getElementsByClassName("imagen");
// esc.addEventListener("onkeypress",function(e){
//     if(e==27){}
// });
function detectarTecla (e) {
    var event = e;
    if (event.keyCode == 27) {
      modal.style.display="none";
    }
  }
  document.onkeyup = detectarTecla;
});
