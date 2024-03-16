import Animal from "./animalesClass.js";
// Herencias según diagrama
export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    return this.sonido;
  }
}

// // Instancia
// const rugido = new Leon(rugido());

// //Obj Nuevo
// console.log(rugido.sonido);
