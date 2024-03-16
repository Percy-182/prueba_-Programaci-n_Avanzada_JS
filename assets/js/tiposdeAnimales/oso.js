import Animal from "./animalesClass.js";

//Herencia de class padre Animal
export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Gruñir() {
    return this.sonido;
  }
}
