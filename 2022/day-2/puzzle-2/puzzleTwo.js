// Facts:
// Second column:
//      X == lose
//      Y == draw
//      Z == win

// The score for a single round is the score for the shape you selected 
//      1 for Rock, 
//      2 for Paper, 
//      3 for Scissors 
//      plus the score for the outcome of the round 
//          0 if you lost, 3 if the round was a draw, and 6 if you won

// Opponent plays:
//      A == Rock
//      B == Paper
//      C == Scissors

const fs = require ('fs');
let textFile = fs.readFileSync('../puzzle-1/puzzleInput.txt', 'utf-8').split('\n');

let myPoints = 0;

textFile.forEach((line) => {
    let opponentPlay = line.split(' ')[0];
    let roundResult = line.split(' ')[1];
    
    // Rock
    if(opponentPlay == 'A') {

        // lost
        if(roundResult == 'X') {
            myPoints += 3;
        }
        // tie
        else if(roundResult == 'Y') {
            myPoints += 4;
        }
        // won
        else {
            myPoints += 8;
        };
    }
    // Paper
    else if(opponentPlay == 'B') {
        
        // lost
        if(roundResult == 'X') {
            myPoints += 1;
        }
        // tie
        else if(roundResult == 'Y') {
            myPoints += 5;
        }
        // won
        else {
            myPoints += 9;
        };
    }
    // Scissors
    else {
        // lost
        if(roundResult == 'X') {
            myPoints += 2;
        }
        // tie
        else if(roundResult == 'Y') {
            myPoints += 6;
        }
        // won
        else {
            myPoints += 7;
        };
    }

})

console.log(myPoints)