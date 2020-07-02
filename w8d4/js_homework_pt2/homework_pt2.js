// function titleize(names, callback) {
//     names.forEach(name {
//         console.log(callback(name))
//     });
// }

// function callback(name) {
//     return `Mx. ${name} Jingleheimer Schmidt`
// }

function titleize(names, callback) {
    let titleize = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleized);
};

titleize(["Mary", "Brian", "Leo"], (names) => {
    names.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}
    
Elephant.prototype.trumpet = function () {
    console.log(`${name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`)
};

Elephant.prototype.grow = function () {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function() {
    trickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

Elephant.paradeHelper = function(ele) {
    console.log(`${ele} is trotting by!`);
};

function dinerBreakfast() {
    let order = console.log(`I'd like cheesy scrambled eggs please`);
    return function(food) {
            order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    };
};