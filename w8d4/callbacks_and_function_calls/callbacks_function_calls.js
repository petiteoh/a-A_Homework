window.setTimeout(function() {
    alert('HAMMERTIME');
} ,5000); 

function hammerTime(time) {
    window.setTimeout(function () {
        alert(`${time} is HAMMER TIME`);
    });
}

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBis () {
    reader.question('Would you like some tea?', function(answer) {
    console.log(answer);
        reader.question('Would you like some biscuits?', function(answer2) {
            console.log(answer2);
            const first = (answer === 'yes') ? 'do' : 'don\'t';
            const second = (answer2 === 'yes') ? 'do' : 'don\'t';
            console.log(`so you ${first} want tea and you ${second} want biscuits.`);
            reader.close();
        }); 
    });
}
