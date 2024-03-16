// Se importan librerias o archivos
// import { Leon } from "./leon";
// import { Lobo } from "./lobo";
// import { Oso } from "./oso";
// import { Serpiente } from "./serpiente";
// import { Aguila } from "./aguila";

//CLASES
// Se crean las class de acuerdo al diagrama
export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sondo = sonido;
  }
  // Getter para obtener el nombre del animal
  get nombre() {
    return this._nombre;
  }

  // Getter para obtener la edad del animal
  get edad() {
    return this._edad;
  }

  // Getter para obtener la imagen del animal
  get img() {
    return this._img;
  }

  // Setter para obtener los comentarios sobre el animal
  set comentarios(nuevos_comentarios) {
    this._comentarios = nuevos_comentarios;
  }

  // Getter para obtener el sonido del animal
  get sonido() {
    return this._sonido;
  }
}
// Herencias según diagrama
// class Leon extends Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     super(nombre, edad, img, comentarios, sonido);
//   }
//   rugido() {
//     return this.sonido;
//   }
// }
// class Lobo extends Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     super(nombre, edad, img, comentarios, sonido);
//   }
//   aullido() {
//     return this.sonido;
//   }
// }
// class Oso extends Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     super(nombre, edad, img, comentarios, sonido);
//   }
//   gruñido() {
//     return this.sonido;
//   }
// }
// class Serpiente extends Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     super(nombre, edad, img, comentarios, sonido);
//   }
//   siseo() {
//     return this.sonido;
//   }
// }
// class Aguila extends Animal {
//   constructor(nombre, edad, img, comentarios, sonido) {
//     super(nombre, edad, img, comentarios, sonido);
//   }
//   chillido() {
//     return this.sonido;
//   }
// }

export default Animal;
