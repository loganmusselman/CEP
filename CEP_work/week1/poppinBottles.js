var arguments = process.argv;

let dollars = arguments[2];

function poppinBottles(dollars){
    dollars = dollars[2];
    let purchased = Math.floor(dollars / 2);
    let bottles = purchased;
    let caps = purchased;
    let numBottlesReturned = Math.floor(bottles / 2);
    let numCapsReturned = Math.floor(caps / 4);
    let numBottlesLeft = bottles % 2;

    let numCapsLeft = caps % 4;

    let returnInfo = "TOTAL BOTTLES: " + (purchased + numBottlesReturned + numCapsReturned) + '\n' +
                    "REMAINING BOTTLES: " + numBottlesLeft + '\n' +
                    "REMAINING CAPS: " + numCapsLeft + '\n' +
                    "TOTAL EARNED: " + '\n' +
                    "BOTTLES: " + numBottlesReturned + '\n' +
                    "CAPS: " + numCapsReturned;

    console.log(returnInfo);
}

poppinBottles(arguments);