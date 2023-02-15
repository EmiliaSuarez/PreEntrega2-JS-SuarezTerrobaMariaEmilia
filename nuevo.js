class Producto {
    constructor (nombre, precio){
        this.nombre=nombre;
        this.precio=precio
    }
    sumaIva(){
        return this.precio *1.21;
    }
}
const fideos= new Producto ("fideos", 90);
console.log ("El precio de los fideos es de: " + fideos.precio + " y con el iva incluido es de: " + fideos.sumaIva());



let array = [1,2,3];
console.log(array);

let arrayVacio = [];
console.log(arrayVacio);


class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto ("Fideos", 100);
const harina = new Producto ("Harina", 250);
const gaseosa = new Producto ("Gaseosa", 180);
const pan = new Producto ("Pan", 120);

//Vamos a crear un array que va almacenar todos estos productos:

const arrayProductos = [ fideos, harina, gaseosa, pan];
console.log(arrayProductos);