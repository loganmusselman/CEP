var arguments = process.argv;


function joining(arguments){
    let startString = "Today I learned about ";
    let count = 1;
    arguments.map((item, index) => {
        if(arguments[arguments.length - 1] === "]"){
            count = 2
        }
        if(index > 1 && index < arguments.length - count){
            if(item.indexOf("[") === -1 && item.indexOf("]") === -1){
                startString += item + ", ";
            } else {
                startString += item.substr(1, item.length) + ", ";
            }
        }
            if(index === arguments.length - count){
                if(item.indexOf("]") === -1){
                    startString += "and " + item + '.';
                }
            } 
            // else {
            //     if(index === arguments.length - count){
            //         console.log("This is the item "  + item + " and this is the index: " + index + " and this is the length: " + arguments.length);
            //         if(item.indexOf("]") === -1){
            //             startString += "and " + item + '.';
            //         }
            //     }
            // }        
    });
    console.log(startString);
    return startString;


}

joining(arguments);