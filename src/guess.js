const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {
    //looping over the alphabet
    const btn = document.createElement('button');
    //making a button for each letter
    btn.innerText = letter;
    //labeling the button with appropriate letter
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //activating the guess function when clicked
    element.append(btn);
  });
}

export default setupGuesses;
