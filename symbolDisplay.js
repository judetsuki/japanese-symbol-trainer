// symbolDisplay.js
import { hiraganaList } from "./symbolList.js";


console.log('JavaScript file loaded');


console.log('hiraganaList:', hiraganaList);


const kanaBox = document.querySelector('.kana-box');
console.log('kanaBox:', kanaBox);


const answerBox = document.querySelector('.answer-box');
console.log('answerBox:', answerBox);


let currentKana = null;


function showNextKana() {
  const randomKey = Object.keys(hiraganaList)[Math.floor(Math.random() * Object.keys(hiraganaList).length)];
  currentKana = hiraganaList[randomKey];
  kanaBox.textContent = currentKana;
  answerBox.value = ''; // Clear the input field
}


showNextKana();


answerBox.addEventListener('input', () => {
  const userAnswer = answerBox.value;
  const correctAnswer = Object.keys(hiraganaList).find(key => hiraganaList[key] === currentKana);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    showNextKana();
  }
});