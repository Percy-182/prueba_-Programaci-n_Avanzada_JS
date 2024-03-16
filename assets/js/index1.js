$(document).ready(function () {
  $("#animal").change(function () {
    // Obtener el valor seleccionado por el usuario
    const animalSeleccionado = $(this).val();

    // Buscar el animal seleccionado en el JSON
    const animal = obtenerAnimalDelJSON(animalSeleccionado);

    // Crear elementos HTML para mostrar la información del animal
    const elementoAnimal = crearElementoAnimal(animal);

    // Agregar los elementos al contenedor en la interfaz de usuario
    $("#Animales").empty().append(elementoAnimal);
  });

  // Función para obtener los datos del animal seleccionado del JSON
  function obtenerAnimalDelJSON(nombreAnimal) {
    // Aquí debes implementar la lógica para buscar y obtener los datos del animal del JSON
    // Puedes iterar sobre el array de animales en el JSON y buscar el objeto con el nombreAnimal correspondiente
    // Devuelve el objeto del animal encontrado
  }

  // Función para crear elementos HTML para mostrar la información del animal
  function crearElementoAnimal(animal) {
    // Aquí puedes crear elementos HTML dinámicamente para mostrar la información del animal
    // Por ejemplo, puedes crear un div con el nombre, la imagen y el sonido del animal
    // Devuelve el elemento HTML creado
  }
});
