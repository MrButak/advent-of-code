// Find the one single letter that each line of 3 has
// Keep a running total of that letter's value

const fs = require('fs');
let textFile = fs.readFileSync('../puzzle-1/puzzleInput.txt', 'utf-8').split('\n');

// Build an Object with the letter:value {a:1,b:2...}
let letterValue = 1;
let letterValueObject = {};
for(let i = 97; i < 123; i++) {
    letterValueObject[`${String.fromCharCode(i)}`] = letterValue;
    letterValue++;
};
for(let i = 65; i < 91; i++) {
    letterValueObject[`${String.fromCharCode(i)}`] = letterValue;
    letterValue++;
};


function findCommonLetterOfThreeArrays(arrayOne, arrayTwo, arrayThree) {

    let commonLetter = '';
    let commonLetterFound = false;
    
    while(!commonLetterFound) {
        let commonLetterOfTwoArrays = arrayOne.filter(letter => arrayTwo.includes(letter));
        for(let i = 0; i < commonLetterOfTwoArrays.length; i++) {
            if(arrayThree.includes(commonLetterOfTwoArrays[i])) {
                commonLetterFound = true;
                commonLetter = commonLetterOfTwoArrays[i];
                break;
            };
        };
    };
    return commonLetter;
    
}

let totalItemNumericValue = 0;
let groupCounter = 0;
let groupArray = [];
for(const line of textFile) {
    
    groupArray.push(line);
    groupCounter++;
    if(groupCounter > 2) { 
        let commonLetter = findCommonLetterOfThreeArrays(
            groupArray[0].split(''), 
            groupArray[1].split(''),
            groupArray[2].split('')
        );
        totalItemNumericValue += letterValueObject[`${commonLetter}`];
        groupCounter = 0;
        groupArray.length = 0;
    };
};

console.log(totalItemNumericValue)