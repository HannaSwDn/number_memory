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
let numbersAmount = 1;
let generatedNumbers = [];

const startTest = () => {
    for (let i = 0; i < generatedNumbers; i++) {
        let number = Math.floor(Math.random() * 10);
        generatedNumbers.push(number);
    }
}