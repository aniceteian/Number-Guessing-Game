let randomNumber = Math.floor(Math.random()* 100) + 1;

console.log(randomNumber);

const guessess = document.querySelector('.guessess');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;

function checkGuess(){
  let userGuessess = Number(guessField.value); 

  if(guessCount === 1){
    guessess.textContent = 'Previous Guesses: ';
  }
   guessess.textContent += userGuessess + ' ';

   if(userGuessess === randomNumber){
    lastResult.textContent = 'Congratulations! You guessed the right number! 👌';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';

    setTimeout(function () {
      location.reload(true);
    }, 3000);

   } else if(guessCount === 10){
    lastResult.textContent = 'Game Over! 😞';
    lastResult.style.backgroundColor = 'red';
    setGameOver();

    setTimeout(function () {
      location.reload(true);
    }, 2000);

   }else{
    lastResult.textContent = 'Wrong! 😂';
    lastResult.style.backgroundColor = 'red';

      if(userGuessess < randomNumber){
        lowOrHi.textContent = 'Your previous guess was too low!';
      }else if(userGuessess > randomNumber){
        lowOrHi.textContent = 'Your previous guess was too high!';
      }else {
        lowOrHi.textContent = 'Your previous guess was not a number!';
      }
   }

   guessCount++;

   guessField.value = '';
   guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  guessSubmit.style.backgroundColor = 'gray';
  guessSubmit.style.cursor = 'none';
}

