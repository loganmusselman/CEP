var arguments = process.argv;

function passwordChanger(arguments){

    for(let i = 2; i < arguments.length; i++){

        arguments[i] = arguments[i].replace("a", 4);
        arguments[i] = arguments[i].replace("e", 3);
        arguments[i] = arguments[i].replace("o", 0);
        arguments[i] = arguments[i].replace("l", 1);
    }
    
    arguments = arguments.slice(2);
    console.log(arguments);
    return arguments;
}

passwordChanger(arguments);