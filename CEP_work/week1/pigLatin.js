var arguments = process.argv;

function pigLatin(arguments){
    let reverse = "";
    for(let i = 2; i < arguments.length; i++){
        reverse += arguments[i].substr(1) + arguments[i][0] + "ay "; 
    }
    console.log(reverse);
}

pigLatin(arguments);