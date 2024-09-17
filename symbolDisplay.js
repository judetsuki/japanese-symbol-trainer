// symbolDisplay.js
import { hiraganaList } from "./symbolList.js";

const kanaBox = document.querySelector('.kana-box');
const answerBox = document.querySelector('.answer-box');

let currentKana = null;


function showNextKana() {
  const randomKey = Object.keys(hiraganaList)[Math.floor(Math.random() * Object.keys(hiraganaList).length)];
  currentKana = hiraganaList[randomKey];
  kanaBox.textContent = currentKana;
  answerBox.value = ''; // Clear the input field
}

showNextKana();

const correctHiraganaList = {};

answerBox.addEventListener('input', () => {
  const userAnswer = answerBox.value;
  const correctAnswer = Object.keys(hiraganaList).find(key => hiraganaList[key] === currentKana);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctHiraganaList[userAnswer] = hiraganaList[correctAnswer]; // Store the correctly guessed kana in the new list
    delete hiraganaList[correctAnswer]; // Remove the correctly guessed kana from the original list
    showNextKana();
  }
});