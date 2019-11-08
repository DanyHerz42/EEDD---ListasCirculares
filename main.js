import Base from "./Base.js";
import Recorrido from "./Recorrido.js";
class Main{
  constructor(){
    let recorrido = new Recorrido();
    document.querySelector("#btnAdd").addEventListener("click", () => {
      let objBase = {
        nombre: document.querySelector("#nombre").value,
        minutos: document.querySelector("#minutos").value,
      }
      let nuevaBase = new Base(objBase);
      recorrido.insertarBase(nuevaBase);
    })
    document.querySelector("#btnBorrar").addEventListener("click", () => {
      let borrar =document.querySelector("#borrar").value;
      recorrido.borrarBase(borrar);
    })
  }
}
let m = new Main();