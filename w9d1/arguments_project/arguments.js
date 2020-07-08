// function sum(...args) {
//     let sum = 0
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

Function.prototype.myBind = function (ctx) {
    const bindArgs = Array.from(arguments).slice(1)
    return (...callArgs) => {
        // shares the same "arguments" from the myBind() time argument
        // const callArgs = Array.from(arguments)
        return this.apply(ctx, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBindAlt = function (ctx) {
    const bindArgs = Array.from(arguments).slice(1)
    const altThis = this
    return function fatArrow() {
        //arguments is argument at the call time of the fatArrow()
        const callArgs = Array.from(arguments)
        return altThis.apply(ctx, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBind = function (ctx, ...args) {
    const that = this
    return function fatArrow(...moreArgs) {
        return that.apply(ctx, args.concat(moreArgs))
    }
};


const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
    const args = [];

    return function _curriedSum(num) {
        nums.push(num);

        if (nums.length === numArgs) {
            let result = 0;
            nums.forEach(function (num) { result += num })
            return result;
            // return nums.reduce((a,b) => a + b, 0)
        } else {
            return _curriedSum;
        }
    };
}; 
   
// const total = curriedSum(4);
// console.log(total(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    let nums = [];
    let that = this;

    function _curry(arg) {
        nums.push(arg);
        
        if (nums.length === numArgs) {
            // return that.apply(null, nums);
            return that(...nums);
        } else {
            return _curry;
        }
    }
    return _curry
}

function sum(...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

let test = sum.curry(3);
console.log(test(4)(1)(2));