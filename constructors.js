//constructor
function Dog(name, color) {
//own properties
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

//prototype property
Dog.prototype = {
    constructor: Dog,
    tailLength: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    sayName: function() {
        console.log("Arf, my name is " + this.name);
    }
}

let terrier = new Dog("Alnick", "Black");
let isInstanceof = terrier instanceof Dog;
let isPrototypeof = Dog.prototype.isPrototypeOf(terrier);
let arrOwnProps = [];
let arrPrototypeProps = [];

//filters the own properties from prototype properties
for(props in terrier) {
    if(terrier.hasOwnProperty(props)) {
        arrOwnProps.push(props);
    } else {
        arrPrototypeProps.push(props);
    }
}

console.log(terrier.name);
console.log(isInstanceof);
console.log(isPrototypeof);
console.log(arrOwnProps);
console.log(arrPrototypeProps);
console.log(terrier.sayName());
