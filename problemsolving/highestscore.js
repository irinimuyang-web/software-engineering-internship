 // i compare each score with the current highest score and update the highest score if a higher score is found
let scores=[65,80,20,75,60,85,70,95,55,100];
let highestScore = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
        highestScore = scores[i];
    }
}
console.log(highestScore);