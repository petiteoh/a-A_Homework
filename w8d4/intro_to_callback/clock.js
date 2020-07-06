class Clock {
    constructor() {
//         // this.date = new Date();
//         // this.hours = this.date.getHours();
//         // this.minutes = this.date.getMinutes();
//         // this.seconds = this.date.getSeconds();
        this._tick();
    }

    printTime(hours, minutes, seconds) {
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        setInterval(this.printTime.bind(this), 1000);
    }
};

const clock = new Clock();



// const readline = require('readline');
 
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         reader.question('Number:', (input) => {
//             console.log(sum += parseInt(input));
//             numsLeft -= 1;
//             addNumbers(sum, numsLeft, completionCallback);
//         });
//     } else  { 
//         completionCallback(sum)
//         reader.close();
//     };
// }

// addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} bigger than ${el2}?`, (answer) => {
        const firstAnswer = (answer === 'yes') ? callback(true) : callback(false);
    });
}

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     if (i < arr.length - 1) {
//         askIfGreaterThan(arr[i], arr[i+1], isGreaterThan);
//     }
// }

// function absurtBubbleSort(arr, sortCompletetionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {

//     }
// }


// absurdBubbleSort([3, 2, 1], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

askIfGreaterThan(2, 1, answer => console.log( 1 > 2 ))
