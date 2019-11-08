export default class Recorrido {
  constructor() {
    this._inicio = null;
    this._bandera = false;
  }
  insertarBase(base) {
    if (!this._inicio) {
      this._inicio = base;
      this._bandera = true;
      console.log(this._inicio);
      return;
    } else {
      if (this._bandera === true) {
        console.log("si")
        let temp = this._inicio;
        while (temp.siguiente < !this._inicio) {
          temp = temp.siguiente;
        }
        base.anterior = temp;
        temp.siguiente = base;
        temp.anterior = base;
        base.siguiente = this._inicio;
        console.log(this._inicio);
        this._bandera = false;
        return;
      } else {
        console.log("333")
        let temp = this._inicio;
        while (!(temp.siguiente === this._inicio)) {
          temp = temp.siguiente;
        }
        base.anterior = temp;
        base.siguiente = this._inicio;
        temp.siguiente = base;
        this._inicio.anterior = base;
        console.log(this._inicio);
        return;
      }
    }
  }
  borrarBase(base) {
    if ((this._inicio.siguiente === null) && (this._inicio.anterior === null)) {
      this._inicio = null;
    } else {
      let temp = this._inicio;
      while (!(temp.nombre === base) || temp.siguiente === this._inicio) {
        temp = temp.siguiente;
      }
      if (temp.siguiente === this._inicio && !(temp.nombre === base)) {
        return;
      } else {
        temp.anterior.siguiente = temp.siguiente;
        temp.siguiente.anterior = temp.anterior;
      }
      
    }
    console.log(this._inicio)
  }
}