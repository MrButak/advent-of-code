// Load the text file into memory
// Loop through all of the numbers, adding them together
// When reaching a blank line, take the previous total and add to an Object or Array
// Find the largest number in the Object/Array

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
