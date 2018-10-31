// DOM variables
let firstDiv = document.querySelector('#first');
let secondDiv = document.querySelector('#second');
let thirdDiv = document.querySelector('#third');
let fourthDiv = document.querySelector('#fourth');
let input = document.querySelector('#input');
let bar = document.querySelector('#bar');
let barInside = document.querySelector('#bar_inside');
let p_generatedNumbers = document.querySelector('.p_generated_numbers');
let p_level = document.querySelector('#p_level');
let p_userguess = document.querySelector('#p_userguess');

// global variables
let numbersAmount = 5;
let generatedNumbers = [];
let userGuess = [];

const startTest = () => {
    // generating random numbers for the user to memorize and guess
    for (let i = 0; i < numbersAmount; i++) {
        let number = Math.floor(Math.random() * 10);
        generatedNumbers.push(number);
    }
    generatedNumbers = generatedNumbers.join('');
}

const guess = () => {
    userGuess = input.value;
    if (userGuess == generatedNumbers) {
        console.log('they are the same');
    } else {
        console.log('they are not the same');
        // game over
    }
    
    // resetting for next level
    generatedNumbers = [];
    userGuess = [];
}