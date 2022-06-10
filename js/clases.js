// Claes en JS (disponibles desde ECMAScript 6)

//Las clases en programación orientada a objetos (POO) sirven para dos cosas
// -Estructurar datos en objetos (molde)

// -Mecanismo para a través de sus métodos definir bloques de código a ejecutar en diferentes partes del programa

class Vehicle { //importe usar DoubleCamelcase en el nombre de la clase
//esto son propiedades
brand;
model;
color;
price;
//esto son métodos
constructor(brandIn, modelIn, colorIn, priceIn) {
    this.brand = brandIn;
    this.color = colorIn;
    this.model = modelIn;
    this.price = priceIn;
}

getColor() {
    return this.color;
}
//getColor me devuelve color

setColor(colorIn){
    this.color = colorIn;
}
//Resto de getters y setters de las otras propiedades
getPricewithTaxes(tax) {
return this.price + this.price * tax;
}

}

//Instancia de objetos (generación de objetos a partir de una clase)

let Vehicle1 = new Vehicle('Renault', 'Megan', 'Gris', 20000); //invoca al constructor
console.log(Vehicle1);

Vehicle1.setColor('Rojo');
console.log (Vehicle1);

let VehiclePricewithTax = Vehicle1.getPricewithTaxes (0,21);
console.log(VehiclePricewithTax);