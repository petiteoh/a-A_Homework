function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    return `${this.owner} loves ${this.name}`;
};

const kitty1 = new Cat('malie', 'mom');
const kitty2 = new Cat('didi', 'dad');

console.log(kitty1.cuteStatement());
console.log(kitty2.cuteStatement());

Cat.prototype.cuteStatement = function() {
    return `Everyone loves ${this.name}!`;
};

console.log(kitty1.cuteStatement());
console.log(kitty2.cuteStatement());

Cat.prototype.meow = function() {
    return `${this.name} meow`;
};

console.log(kitty1.meow());
console.log(kitty2.meow());

kitty1.meow = function() {
    return `${this.name} purrr`
}

console.log(kitty1.meow());