var arguments = process.argv;

function reverseTheString(arguments){
    
    for(let i = 2; i < arguments.length; i++){
        let reverse = "";
        for(let j = arguments[i].length - 1; j >= 0; j--){
            reverse += arguments[i][j];
        }
        console.log(reverse);
    }
}

reverseTheString(arguments);