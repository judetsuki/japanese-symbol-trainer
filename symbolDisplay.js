import { hiraganaList } from "./symbolList.js";

console.log('JavaScript file loaded');

console.log('hiraganaList:', hiraganaList);

const kanaBox = document.querySelector('.kana-box');
console.log('kanaBox:', kanaBox);

const answerBox = document.querySelector('.answer-box');
console.log('answerBox:', answerBox);

setTimeout(() => {
    const randomKey = Object.keys(hiraganaList)[Math.floor(Math.random() * Object.keys(hiraganaList).length)];
    const randomKana = hiraganaList[randomKey];
    console.log('randomKana:', randomKana);
  
    kanaBox.textContent = randomKana;
  
    // Get the Latin character corresponding to the Kana letter
    const latinCharacter = Object.keys(hiraganaList).find(key => hiraganaList[key] === randomKana);
    console.log('latinCharacter:', latinCharacter);
  
    answerBox.textContent = latinCharacter;
  }, 1000);