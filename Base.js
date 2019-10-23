export default class Base{
  constructor(objBase){
    this._nombre = objBase.nombre;
    this._minutos = objBase.minutos;
    this._siguiente = null;
    this._anterior = null;
  }
  get nombre(){
    return this._nombre;
  }
  get minutos(){
    return this._minutos;
  }
  get siguiente(){
    return this._siguiente;
  }
  get anterior(){
    return this._anterior;
  }
  set nombre(newNombre){
    this._nombre = newNombre;
  }
  set minutos(newMinutos){
    this._minutos = newMinutos;
  }
  set anterior(newAnterior){
    this._anterior = newAnterior;
  }
  set siguiente(newSiguiente){
    this._siguiente = newSiguiente;
  }
}