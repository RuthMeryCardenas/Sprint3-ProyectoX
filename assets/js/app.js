window.addEventListener("load", function () {
  // FUNCIONES
  function createElement (parent, elementType, classList, optionalAttribute) {
    var element = document.createElement(elementType);
    for (var i = 0; i < classList.length; i++) {
      element.classList.add(classList[i]);
    }
    if (elementType == "p") {
      element.appendChild(document.createTextNode(optionalAttribute));
    }
    if (elementType == "img") {
      element.setAttribute("src", optionalAttribute);
    }
    parent.appendChild(element);
    return element;
  }
  function printSlide() {
    var slide_div = document.getElementsByClassName("slide");
    var slide_text = createElement (slide_div[0], "div", ["slide-text"]);
    createElement (slide_text, "p", ["text", "title"], "LA MEJOR RECETA PARA TU EVENTO");
    createElement (slide_text, "p", ["text", "subtitle"], "LA ALTA COCINA, LA PUEDE DISFRUTAR CUALQUIERA");
    // Crear y cargar las imágenes al Slide
    createElement (slide_div[0], "img", ["slide-image", "image-show"], "assets/img/home-1.jpg");
    createElement (slide_div[0], "img", ["slide-image", "image-hidden"], "assets/img/home-2.jpg");
    createElement (slide_div[0], "img", ["slide-image", "image-hidden"], "assets/img/home-3.jpg");
    createElement (slide_div[0], "img", ["slide-image", "image-hidden"], "assets/img/home-4.jpg");
  }
  // LLAMANDO FUNCIONES
  printSlide();
});
