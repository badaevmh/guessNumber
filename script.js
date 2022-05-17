'use strict';
let body = document.querySelector('body');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

let scoreTry = 10;
let highscoreTry = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guessValue = Number(guess.value);

    // Когда нет инпут данных
    if (!guessValue) {
        displayMessage('No number!');
    }
    // Когда игрок угадал число
    else if (guessValue === secretNum) {
        number.textContent = secretNum;
        displayMessage('Correct number!');
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        if (highscoreTry < scoreTry) {
            highscoreTry = scoreTry;
            highscore.textContent = highscoreTry;
        }
    }
    // Когда игрок не угадал число
    else if (guessValue !== secretNum) {
        if (scoreTry > 1) {
            displayMessage(guessValue > secretNum ? 'Too high!' : 'Too low!');
            scoreTry--;
            score.textContent = scoreTry;
        } else {
            displayMessage('You lose!');
            score.textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {

    secretNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    scoreTry = 10;
    score.textContent = scoreTry;
    guess.value = '';
    number.textContent = '?';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    console.log(secretNum);
})

document.querySelector('.clear').addEventListener('click', function() {
    highscoreTry = 0;
    highscore.textContent = highscoreTry;
})