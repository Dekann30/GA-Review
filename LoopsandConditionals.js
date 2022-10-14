//Branching Statement Exercise

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Green, Yellow, or Red? ', color => {
    if (color === 'Green') {
    console.log('Go')
} else if (color === 'Yellow'){
    console.log('Slow')
} else if (color === 'Red'){
    console.log('Stop')
} else {
    console.log('Whatever')
}
readline.close()
})



