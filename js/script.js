let botonesAc = document.querySelectorAll(".btnAcordion");
let texto = document.querySelectorAll(".textoAcordion");

//recorro todos los elementos que tienen la misma clase
botonesAc.forEach((botonAc, index) => {
  //evento click en cada boton
  botonAc.addEventListener('click', () => {

    // Alternar visibilidad del contenido correspondiente accediendo por medio del indice al elemento
    texto[index].classList.toggle('mostrarTextoAcordion');
    botonesAc[index].classList.toggle('btnAcordionIcono');
  });
});