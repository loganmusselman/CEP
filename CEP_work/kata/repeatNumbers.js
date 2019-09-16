var repeatNumbers = function(data){
    let iterations = data.length;

    if(iterations === 1){
        let answerArray = [];
        for(let i = 0; i < data[0][1]; i++){
            answerArray.push(data[0][0]);
        }
        let answerString = answerArray.join("");
        return answerString;
    } else {
        let answerArray = [];
        let answerString = [];
        for(let i = 0; i < data.length; i++){
            for(let j = 0; j < data[i][1]; j++){
                answerString.push(data[i][0]);
            }
            answerString = answerString.join("");
            answerArray.push(answerString);
        }
        answerString.join(", ");
        return answerString;
    }
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1,2],[2,3]]));
console.log(repeatNumbers([[10,4],[34,6],[92,2]]));