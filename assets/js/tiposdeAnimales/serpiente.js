import Animal from "./animalesClass.js";

//Herencia de class padre Animal

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear() {
    return this.sonido;
  }
}
