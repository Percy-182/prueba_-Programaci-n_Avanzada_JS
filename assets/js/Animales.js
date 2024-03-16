// Este código define un módulo para obtener datos de animales desde un archivo JSON.

let animales = (() => {
  const url = "../../animales.json"; // La URL del archivo JSON.
  console.log(url);
  // Función asincrónica para obtener los datos de la URL.
  const getData = async () => {
    console.log(getData);
    const res = await fetch(url); // Realiza una solicitud de red.
    const { animales } = await res.json(); // Se obtiene el obj completo JSON, asigando como const por nombre data.
    console.log(animales);
    return animales; // Retorna la lista de animales.
  };

  // Retorna un objeto con la función getData.
  console.log({ getData });
  return { getData };
})();

export default animales; // Exporta el módulo.
