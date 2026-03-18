import { reglas, ejecutarSistemaExperto } from "./Sistema-Experto-Reglas.js";

let currentCardIndex = 0; 
const cards = document.querySelectorAll(".card"); 
const hechos = {}; 

// Función para mostrar la tarjeta activa o los resultados
function mostrarTarjeta(index) {

  cards.forEach((card) => card.classList.remove("active"));

  if (index < cards.length) {

    cards[index].classList.add("active");
    console.log(`Mostrando tarjeta ${index + 1} de ${cards.length}`);
  } else {

    const resultadoContenedor = document.getElementById("resultado");
    const resultadoContenido = document.getElementById("resultado-contenido");

    if (!resultadoContenedor || !resultadoContenido) {
      console.error("El contenedor de resultados no está definido.");
      return;
    }

    const recomendaciones = ejecutarSistemaExperto(hechos, reglas);


    console.log("Recomendaciones generadas:", recomendaciones);

    
    resultadoContenido.innerHTML = recomendaciones.length
      ? recomendaciones.join("<br>")
      : "No se encontraron resultados.";

    resultadoContenedor.classList.add("active");
    console.log("Resultados mostrados correctamente.");
  }
}

// Configurar eventos para las opciones
document.querySelectorAll(".opcion").forEach((boton) => {
  boton.addEventListener("click", (event) => {
    const respuesta = event.target.getAttribute("data-respuesta");
    const pregunta = event.target.closest(".card").getAttribute("data-pregunta");


    hechos[pregunta] = respuesta;
    console.log(`Respuesta guardada: ${pregunta} = ${respuesta}`);


    const opciones = event.target.closest(".card").querySelectorAll(".opcion");
    opciones.forEach((opcion) => opcion.classList.remove("opcion-seleccionada"));
    event.target.classList.add("opcion-seleccionada");
  });
});

// Configurar eventos para los botones "Continuar"
document.querySelectorAll(".continuar").forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (hechos[cards[index].getAttribute("data-pregunta")]) {
      if (index === cards.length - 1) {
        mostrarTarjeta(cards.length);
      } else {
        mostrarTarjeta(index + 1);
      }
    } else {
      alert("Por favor, selecciona una opción antes de continuar.");
    }
  });
});

// Mostrar la primera tarjeta al cargar
mostrarTarjeta(currentCardIndex);
