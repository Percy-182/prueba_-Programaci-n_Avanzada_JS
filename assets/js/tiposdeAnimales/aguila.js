import Animal from "./animalesClass.js";

//Herencia de class padre Animal
export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar() {
    return this.sonido;
  }
}
