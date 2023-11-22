const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;



async function init(){
    let  currentGuess = '';
    let currentRow = 0;

    const res = await fetch("https://words.dev-apis.com/validate-word");
   
    const resObj = await res.json();
    const word = resObj.word.toUpperCase

    function addLetter(letter) {
        if (currentGuess.length <  ANSWER_LENGTH){
        currentGuess += letter;
        } else {
            currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
        }
        letters[ currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText = letter;
    }

    async function commit (){
        if (currentGuess.length !== ANSWER_LENGTH){
            return;
        }

        // TODO validate the word

        // TODO do all the marking as "correct" "close" or"wrong"

        //TODO did they win or lose 
        currentRow++;
        currentGuess = '';
    }
    function backspace () {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1);
        letters[ currentRow * ANSWER_LENGTH + currentGuess.length].innerText = ""
    }

    document.addEventListener("keydown", function handleKeyPress (event){
        const action = event.key;
      
        if (action === 'Enter') {
            commit();
        } else if (action === 'Backspace') {
            backspace();
        } else if (isLetter(action)) {
            addLetter(action.toUpperCase())
        } else {

        }
    })
}

 function isLetter (letter) {
    
    return /^[a-zA-Z]$/.test(letter)
}

init()
