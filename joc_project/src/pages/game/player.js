export { Player };

class Player {
  constructor(nombre, cartas, imagenFondo, life, id) {
    this._nombre = nombre;
    this._cartas = cartas;
    this._imagenFondo = imagenFondo;
    this._life = life;
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  getImagenFondo() {
    return this._imagenFondo;
  }

  setImagenFondo(imagen) {
    this._imagenFondo = imagen;
  }

  getCartas() {
    return this._cartas;
  }

  getVida() {
    return this._life;
  }

  setVida(nuevaVida) {
    this._life = nuevaVida;
  }

  modificarVida(cambio) {
    this._life -= cambio;
  }
}
