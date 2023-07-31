//constructor
function Dog(name, color) {
//own properties
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

Dog.prototype.tailLength = 2; //prototype property
let terrier = new Dog("Alnick", "Black")
let isInstanceof = terrier instanceof Dog;
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
console.log(arrOwnProps);
console.log(arrPrototypeProps);
