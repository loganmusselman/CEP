var arguments = process.argv;

/* process.argv is an array that contains the following information:

[
    command executed,
    file location,
    first agument,
    second argument,
    etc....
]

*/

function addNumbers(arguments){
    let number = 0; 
    for(let i = 2; i < arguments.length; i++){
        number += new Number(arguments[i]);
    }
    console.log(number);
    return number;
}

addNumbers(arguments);
