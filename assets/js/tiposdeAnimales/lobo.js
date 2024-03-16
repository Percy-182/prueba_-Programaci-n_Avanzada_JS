import Animal from "./animalesClass.js";

//Herencia de class padre Animal
export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Aullar() {
    return this.sonido;
  }
}
