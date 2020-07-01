function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

//in block, in block



function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block, out of block



function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// syntax error



function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block, out of block




function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

// syntax error




function madLib(verb, adjective, noun) {
    var verb = 'make'
    var adjective = 'best'
    var noun = 'guac'
    console.log(`we shall ${verb.toUpperCase} the ${adjective.toUpperCase} ${noun.toUpperCase}`)
};

function isSubstring(searchString, subString) {
    return searchString.includes(subString)
};

// function fizzBuzz(array) {
//     array.forEach(el => return 
//         (el % 3 == 0 || el % 5 == 0) && !(el % 3 == 0 && el % 5 == 0)
//         )
// };

function fizzBuzz(array) {
    const newArray = []

    array.forEach(el =>{
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
        newArray.push(el); 
    }
    });
    return newArray;
}


function isPrime (num) {
    if (num < 2) { return false; }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
return true;
}

// function sumOfNPrimes (num) {
//     const sum = 0
//     for (let i = 1; sum.length < num; i ++)
//         if (ifPrime(i)) {
//             sum += i
//         }

// }

function sumOfNPrimes(n) {
    let sum = 0;
    let countPrimes = 0;
    let i = 2;

    while (countPrimes < n) {
        if (isPrime(i)) {
            sum += i;
            countPrimes++;
        }
        i++;
    }

    return sum;
}