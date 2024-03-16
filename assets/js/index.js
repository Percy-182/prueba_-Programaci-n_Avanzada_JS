// Se importan librerias o archivos
import animales from "./Animales.js";
import { Animal } from "./tiposdeAnimales/animalesClass.js";
import { Leon } from "./tiposdeAnimales/leon.js";
import { Lobo } from "./tiposdeAnimales/lobo.js";
import { Oso } from "./tiposdeAnimales/oso.js";
import { Serpiente } from "./tiposdeAnimales/serpiente.js";
import { Aguila } from "./tiposdeAnimales/aguila.js";

//import animales from "./pedirData";

$(document).ready(function () {
  $("#btnRegistrar").click(function () {
    // Obtener los valores del formulario
    const nombreAnimal = $("#animal").val();
    const edadEstimada = $("#edad").val();
    const comentarios = $("#comentarios").val();

    // Crear una instancia de la clase correspondiente
    let nuevaInstancia;
    switch (nombreAnimal) {
      case "Leon":
        nuevaInstancia = new Leon(
          nombreAnimal,
          edadEstimada,
          "",
          comentarios,
          ""
        );
        break;
      case "Lobo":
        nuevaInstancia = new Lobo(
          nombreAnimal,
          edadEstimada,
          "",
          comentarios,
          ""
        );
        break;
      case "Oso":
        nuevaInstancia = new Oso(
          nombreAnimal,
          edadEstimada,
          "",
          comentarios,
          ""
        );
        break;
      case "Serpiente":
        nuevaInstancia = new Serpiente(
          nombreAnimal,
          edadEstimada,
          "",
          comentarios,
          ""
        );
        break;
      case "Águila":
        nuevaInstancia = new Aguila(
          nombreAnimal,
          edadEstimada,
          "",
          comentarios,
          ""
        );
        break;
      default:
        console.log(nombreAnimal);
        console.error("Animal no reconocido");
        return;
    }

    // Agregar la instancia al contenedor de animales
    const animalHTML = `
      <div class="animal-info style="color: white;">
        <h4>${nombreAnimal}</h4>
        <img src="${nuevaInstancia.img}" alt="${nombreAnimal}">
        <p>Nombre: ${nombreAnimal}</p>
        <p>Edad estimada: ${edadEstimada}</p>
        <p>Comentarios: ${comentarios}</p>
      </div>
    `;
    $("#Animales").append(animalHTML);
  });
});
// //event.preventDefault(); // Evitar el envío del formulario
// //obtengo el animal seleccionado
// const animalSeleccionado = $("#animal").val();
// console.log(animalSeleccionado);
// //busca si el valor seleccionado en form id="animal" está en el JSON
// const animalEncontrado = animales.find(
//   (animal) => animal.name === animalSeleccionado
// );

// if (animalEncontrado) {
//   const animalHTML = `
//     <div class="animal-info">
//       <h4>${animalEncontrado.name}</h4>
//       <img src="${animalEncontrado.imagen}" alt="${animalEncontrado.name}">
//       <p>Nombre: ${animalEncontrado.name}</p>
//       <p>Edad estimada: ${$("#edad").val()}</p>
//       <p>Comentarios: ${$("#comentarios").val()}</p>
//     </div>
//   `;

//   //se agrega el HTML al contenedor de animales
//   $("#Animales").append(animalHTML);
//   $("#preview img").attr("src", animalEncontrado.imagen); // Aquí se actualiza el src de la imagen
//   console.log(animalEncontrado);
// } else {
//   console.error(
//     "Ups!! El animal seleccionado no es valido, prueba otra opción"
//   );
//     }
//   });
// });

// Obtener los valores ingresados
// var animal = $("#animal").val();
// var edad = $("#edad").val();
// var comentario = $("#comentarios").val();
// var preview = $("#preview").val();
// var exampleModal = $("#exampleModal").val();
// // var  = $("#").val();

// // Mostrar los valores ingresados al final del formulario
// $("#Animales").html(`
//             <p>Dueño: ${animal}</p>
//             <p>Telefono: ${edad}</p>
//             <p>Direccion: ${comentario}</p>
//             <p>Nombre de la Mascota: ${preview}</p>
//             <p>Tipo: ${exampleModal}</p>
//         `);
//console.log(animales);
// const obtenerDatos = async () => {
//   // Se declara una constante llamada obtenerDatos que contiene una función asíncrona.
//   try {
//     const response = await fetch("./animales.json"); //solicitud GET
//     if (!response.ok) {
//       //Se verifica si la respuesta de la solicitud fue exitosa. Si no lo fue, se lanza un error.
//       throw new Error("Error en la solicitud: " + response.status);
//     }
//     const data = await response.json();

//     console.log("Datos obtenidos:", data.obtenerDatos());

//     //recibirMensaje(); // Llama a la función para recibir el mensaje
//   } catch (error) {
//     //console.error("Ups ocurrió un Error!!:", error.message);
//   }
// }; //cierre bloque

//obtenerDatos();

//$("#propietario"): Esto selecciona un elemento HTML usando su ID, en este caso propietario. El símbolo $ indica que estamos usando jQuery para seleccionar el elemento.val(): Esto es un método de jQuery que se usa para obtener el valor de un elemento de formulario, como un campo de entrada (<input>), un área de texto (<textarea>) o un elemento de selección (<select>). En este caso, devuelve el valor del campo de entrada asociado al elemento seleccionado con el ID propietario.Entonces, en resumen, la línea de código está obteniendo el valor del campo de entrada HTML con el ID propietario utilizando jQuery.
