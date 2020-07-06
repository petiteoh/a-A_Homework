// Function.prototype.inherits = function(parent) {
//     function Surrogate(){};
//     Surrogate.prototype = parent.prototype;
//     this.prototype = new Surrogate;
//     this.prototype.constructor = this;
// }

Function.prototype.inherits = function (parent) {
    this.prototype = Object.create(parent.prototype)
    this.prototype.constructor = this;
}

// Dog.inherits(Animal)

function Dog(name) {
    constructor{
        this.name = name;
    }
}

Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
};

Corgi.inherits(Dog);

function Corgi(name) {
    Dog.call(this, name);
}

const c1 = new Corgi("Napoleon")
c1.bark();

const d1 = new Dog("Jackjack")
d1.bark();

