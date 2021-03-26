let min = 1,
    max = 5,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.messege'),
      winImg = document.querySelector('.win-img'),
      loseImg = document.querySelector('.lose-img'),
      gameLose = document.querySelector('.game-over'),
      think = document.querySelector('.think');


minNum.textContent = min;
maxNum.textContent = max;

winImg.style.display = 'none';
loseImg.style.display = 'none';
gameLose.style.display = 'none';
think.style.display = 'none';

// Play Again Listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   if(isNaN(guess) || guess < min || guess > max) {
       setMessage(`Please Enter A Number Betwen ${min} and ${max}`, 'red');
       think.style.display = 'block';
   } else {
       // Check if won
if(guess === winningNum){

    gameOver(true, `${winningNum} is correct! You win`);
    winImg.style.display = 'block';
    think.style.display = 'none';
} else {
    guessesLeft -= 1;

    if(guessesLeft === 0){
    
        gameOver(false, `Game Over, You Lost. The Correct Number Was ${winningNum}`);
        gameLose.style.display = 'block';
        loseImg.style.display = 'none';
        think.style.display = 'none';
    } else {
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        loseImg.style.display = 'block';
        think.style.display = 'none';
    }
   }

}

});
  
// Game Over

function gameOver(won, msg) {

    let color;
    won === true? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.bordercolor = 'color';
    guessInput.style.color = 'color';

    setMessage(msg);

    // Play Again

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Set messege
 
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}