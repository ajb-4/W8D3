    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum)
        rl.close();
    } else {

    rl.question(`You have ${numsLeft} numbers left, please provide a number`, response => {
        console.log(sum + parseInt(response));
        addNumbers(sum += parseInt(response), numsLeft -= 1, completionCallback);
    })
    }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



