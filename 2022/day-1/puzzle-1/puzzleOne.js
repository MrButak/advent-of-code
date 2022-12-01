// Find the largest number in the Array, 
//      push it to another Array
//      remove the Number from the first Array
//      Continue 3 times
// Sum up the 3 numbers in the new Array

const fs = require('fs');

let textFile = fs.readFileSync('./puzzleInput.txt', 'utf-8');
let totalCalories = 0;
let totalCaloriesArray = [];
textFile.split('\n').forEach((line) => {
    if(line) {
        totalCalories += parseInt(line);
    }
    else {
        totalCaloriesArray.push(totalCalories);
        totalCalories = 0;
    };  
});

// 69626
let mostCalories = Math.max(...totalCaloriesArray);

console.log(mostCalories);
