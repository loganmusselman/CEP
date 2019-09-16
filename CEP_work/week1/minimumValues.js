var arguments = process.argv;

function minimumValues(arguments){
    var numberArray = [];

    for(let i = 2; i < arguments.length; i++){
        if(arguments[i].indexOf('[') !== -1){
            numberArray.push(arguments[i].substr(1, arguments[i].length));
        } else if(arguments[i].indexOf(']') !== -1){
            numberArray.push(arguments[i].substr(0, arguments[i].length - 1));
        } else {
            numberArray.push(arguments[i]);
        }
    }
    
    let number = numberArray[0];

    for(let i = 1; i < numberArray.length; i++){
        if( numberArray[i] < number){
            number = numberArray[i];
        }
    }
    console.log(number);
    return number;
}

minimumValues(arguments);