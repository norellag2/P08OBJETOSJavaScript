//Objetos en JavaScript

//1ª forma de declarar objetos denominada literales de objeto

//En los objetos tenemos dos miembros esenciales:
//  - propiedades (variables dentro de un objeto) clave: valor, (separados por comas)
//  - métodos (funciones dentro de un objeto) sintaxis de función

let jugador = {
    nombre: 'Sergio', //las propiedades se suelen poner las primeras
    apellidos: 'Ramos',
    dorsal: '4',
    goles: 0,
    equipos: ['Sevilla', 'Real Madrid', 'PSG'],
    marcarGol(){ //esto ya es método
      this.goles++;
    }
}

console.log (jugador);


// En JavaScript accedemos a las propiedades con la anotación del punto
//Para leer sus valores
console.log(jugador.apellidos);

//Para establecer sus valores

jugador.nombre = 'Sergio Javier';
console.log(jugador);

//En JS invocamos los métodos también con la notación del punto
jugador.marcarGol ();
jugador.marcarGol ();

console.log (jugador);


//2ª Forma (poco utilizada) con la clase Object

let jugador2 = new Object();

//En JS las propiedades se pueden extender desde fuera
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.equipos = [' F.C Barcelona', 'PSG'];
jugador2.goles = 0;
jugador2.marcarGol = function ( ) {
    this.goles++;
}
jugador2.marcarGol ();
console.log (jugador2);

