var arguments = process.argv;

function passwordChanger(arguments){

    let letterKeys = {
    'a': 4,
    'e': 3,
    'o': 0,
    'l': 1
    }

    let stringArray = arguments[2].split("");

    stringArray.map((letter, index) => {
        if(letterKeys[letter] || letterKeys[letter] === 0){
            stringArray[index] = letterKeys[letter];
            console.log(letter);
        }
    });
    stringArray = stringArray.join("");
    console.log(stringArray);
    return stringArray;
}

passwordChanger(arguments);