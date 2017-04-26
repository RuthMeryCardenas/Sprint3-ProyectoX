window.addEventListener("load", function () {
  // VARIABLES GLOBALES
  var image_counter = 0;//Contador de imágenes
  var slide_titles = ["LA MEJOR RECETA PARA TU EVENTO",
                      "COCINAMOS CON AMOR",
                      "SIMPLEMENTE LOS MEJORES CHEF",
                      "LA MEJOR ALTERNATIVA GASTRONÓMICA"
                      ];
  var slide_subtitles = ["LA ALTA COCINA, LA PUEDE DISFRUTAR CUALQUIERA..",
                         "EL MEJOR SERVICIO, PORQUE NOS ENCANTA VERTE SONREIR",
                         "EL MEJOR SABOR, UN GRAN PRECIO.",
                         "UN BUEN SABOR NO SIGNIFICA SIEMPRE QUE SEA CARO"
                      ];

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
  function administerClasses (element, classToRemove, classToAdd) {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
  }
  function runSlide () {
    var slide_image = document.getElementsByClassName("slide-image");//Imágenes del slide
    var slide_texts = document.getElementsByClassName("text");//Texto del Slide
    //EVENTOS
    var change_slide_text = new Event("changeSlideText");
    slide_texts[0].addEventListener("changeSlideText", function (e) {
      this.innerHTML = slide_titles[image_counter];
    }, false);

    slide_texts[1].addEventListener("changeSlideText", function (e) {
      this.innerHTML = slide_subtitles[image_counter];
    }, false);

    // Ocultando la imagen actual
    administerClasses (slide_image[image_counter], "image-show", "image-hidden");
    //Aumentando el contador de imágenes
    image_counter = (image_counter + 1) % 4;
    //Mostrando la siguiente imagen
    administerClasses (slide_image[image_counter], "image-hidden", "image-show");
    slide_texts[0].dispatchEvent(change_slide_text);
    slide_texts[1].dispatchEvent(change_slide_text);
  }
  // LLAMANDO FUNCIONES
  printSlide();
  setInterval(runSlide,5000);
});
