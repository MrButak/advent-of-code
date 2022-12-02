// Facts:
// 1. Total score is the sum of your scores for each round
// 2. The score for a single round is the score for the shape you selected 
//      1 for Rock, 
//      2 for Paper, 
//      3 for Scissors 
//      plus the score for the outcome of the round 
//          0 if you lost, 3 if the round was a draw, and 6 if you won

// Opponent plays:
//      A == Rock
//      B == Paper
//      C == Scissors
// My plays:
//      X == Rock
//      Y == Paper
//      Z == Scissors



const fs = require ('fs');
let textFile = fs.readFileSync('./puzzleInput.txt', 'utf-8').split('\n');

let myPoints = 0;

textFile.forEach((line) => {
    let opponentPlay = line.split(' ')[0];
    let myPlay = line.split(' ')[1];

    // Opponent Rock
    if(opponentPlay == 'A') {
        // Tie
        if(myPlay == 'X') {
            myPoints += 4;
        }
        // Won
        else if(myPlay == 'Y') {
            myPoints += 8;
        }
        // Lost
        else {
            myPoints += 3;
        }
    }
    // Opponent Paper
    else if(opponentPlay == 'B') {
        // Lost
        if(myPlay == 'X') {
            myPoints += 1;
        }
        // Tie
        else if(myPlay == 'Y') {
            myPoints += 5;
        }
        // Won
        else {
            myPoints += 9;
        }
    }
    // Opponent Scissors
    else{
        // Won
        if(myPlay == 'X') {
            myPoints += 7;
        }
        // Lost
        else if(myPlay == 'Y') {
            myPoints += 2;
        }
        // Tie
        else {
            myPoints += 6;
        }
    }

})

console.log(myPoints)