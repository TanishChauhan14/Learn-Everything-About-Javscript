// OOPS (Object Oriented Programming System) :- oops is a concept in which we learn to create a function that can be reuse by creating object using keyword "new" also we can call it blueprint of this function .It can look like a mechanism of creating pencil same design but diff brand .

// Example :- 

function CreatePencil(name, color, price) { // This is a Constructor function :- ${name,color,price} are properties of pencil  
    this.name = name;
    this.color = color;
    this.price = price
    // this.write = function (text) {   //write is method
    //     console.log(`${this.name} is writing: ${text}`);
    // }
}


let pencil1 = new CreatePencil("Apsara", "Black", 10); // By using new keyword value of this. converted to a blank object which contain the properties like name,color and price.

pencil1.write("Hello World"); // Calling the method write of pencil1 object

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

// Prototype :- If our contructor fucntion mein koi field Prototype par attach ho jaati hai to vo uss function ke har object/blueprint or instance ke pass automatically chali jaati hai mtlb vo field prototype default uss function ke object ke sath milti hai.We can use it for methods because it's work is same everytime.

CreatePencil.prototype.write = function (text) {   // This can be in our protoype.
    console.log(`${this.name} is writing: ${text}`);
}


//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________


// Clases :- Class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate that data.

class Createcar {

    //______________________________________________________________________________________________________________________________
    // Constructor 
    constructor(name, brand, color, price, average) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.average = average;
    }
    //______________________________________________________________________________________________________________________________
    // Methods

    aboutcar() {
        let h1 = document.createElement("h1");
        h1.innerHTML = `This car name is ${this.name} and lauched by ${this.brand}`
        document.body.append(h1);
    }

    deepDive() {
        let h1 = document.createElement("h1");
        h1.innerHTML = `This car is a ${this.color} ${this.brand} ${this.name} and costs ${this.price}. It gives an average of ${this.average} km/l.`;
        document.body.append(h1);
    }
}

let car1 = new Createcar("Model S", "Tesla", "Red", 79999, 102);
car1.aboutcar();
car1.deepDive();

let car2 = new Createcar("Mustang", "Ford", "Blue", 55999, 25);
car2.aboutcar();
car2.deepDive();


//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

// Extends :-  It is a keyword work same like in java use to get the features of parent class . To use this just in child class we use extends keyword and in it's contructor user super(Pass the properties to run parent constructor)

// Example 

class CreateElectricCar extends Createcar {
    constructor(name, brand, color, price, average, batteryCapacity) {
        super(name, brand, color, price, average);
        this.batteryCapacity = batteryCapacity;
    }

    aboutCar() {
        super.aboutcar();
        let h1 = document.createElement("h1");
        h1.innerHTML = `This electric car has a battery capacity of ${this.batteryCapacity} kWh.`;
        document.body.append(h1);
    }

    deepDive() {
        super.deepDive();
        let h1 = document.createElement("h1");
        h1.innerHTML = `This electric car is a ${this.color} ${this.brand} ${this.name} and costs ${this.price}. It gives an average of ${this.average} km/l and has a battery capacity of ${this.batteryCapacity} kWh.`;
        document.body.append(h1);
    }
}


//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________


// Prototypal inheritance  Vs Classical inheritance

// 1. Classical inheritance :-  classes banana and unhe extends karna .

// 2. Prototypal inheritance :-  ek object ko dusre object se inherit karna.Because phle js mein classes nhi hoti thi.

// Example 
let coffee = {
    type : "dark",
    price : 100,
}

let latte = Object.create(coffee);
latte.type = "latte"; // Inherited
latte.price = 150; // Inherited
latte.taste = "smooth"; // latte it's own
