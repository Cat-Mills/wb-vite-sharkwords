import './style.css';
import getRandomWord from './src/randomWord.js';
import { setSharkImage } from './src/sharkImage.js';
import { setupWord } from './src/word.js';
import { isLetterInWord } from './src/word.js';
import { revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess';
document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;
let sharkImgEl = document.querySelector('#shark-img')
const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(sharkImgEl, numWrong);
  setupWord(document.querySelector('#word-container'), word);

  const handleGuess = (guessEvent,letter) => {
    const button = guessEvent.target
    button.setAttribute('disabled',true)

    if(isLetterInWord(letter)){
      revealLetterInWord(letter)
    } else {
      numWrong += 1;
      setSharkImage(sharkImgEl, numWrong)
    }
    if(checkWinner()){
      alert("You won!")
      disableButtons()
    } else if (numWrong > 5){
      alert("The sharks ate you!")
      disableButtons()
    }
  }
  function disableButtons (){document.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('disabled', true);
  });}
  setupGuesses(document.querySelector('#letter-buttons'),handleGuess)

  function checkWinner() {return Array.from(document.querySelectorAll('.letter-box')).every((el)=> el.innerText !== '',)}
  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  
};

initSharkwords(setSharkImage);
