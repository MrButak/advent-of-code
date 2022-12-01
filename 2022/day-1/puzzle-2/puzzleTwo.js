// Find the largest number in the Array, 
//      push it to another Array
//      remove the Number from the first Array
//      Continue 3 times
// Sum up the 3 numbers in the new Array

const fs = require('fs');

let textFile = fs.readFileSync('../puzzle-1/puzzleInput.txt', 'utf-8');
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

let topThreeLargestCalories = [];
for(let i = 0; i < 3; i++) {
    let mostCalories = Math.max(...totalCaloriesArray);
    let mostCaloriesIndex = totalCaloriesArray.findIndex(totalCals => totalCals == mostCalories);
    topThreeLargestCalories.push(totalCaloriesArray[mostCaloriesIndex]);
    totalCaloriesArray.splice(mostCaloriesIndex, 1);
};

let sumOfLargestThreeCalories = topThreeLargestCalories.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sumOfLargestThreeCalories)
