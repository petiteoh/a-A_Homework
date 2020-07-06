const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Number:', (input) => {
            console.log(sum += parseInt(input));
            numsLeft -= 1;
            addNumbers(sum, numsLeft, completionCallback);
        });
    } else  { 
        completionCallback(sum)
        reader.close();
    };
}

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));