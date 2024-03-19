// function playNow() {
//     /** 
//      * step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     */ 
//     // const homeScreen = document.getElementById('home-screen');
//     // homeScreen.classList.add('hidden');
    
//     /**
//     * step-2: show the playground
//     */
//     // const playGround = document.getElementById('playGround');
//     // playGround.classList.remove('hidden');
// }

//===== 1st function for play
function play() {
    //===== Start First Step For Start The Game
    hideElementById('home-screen');
    showElementById('playGround');
    //===== End First Step For Start The Game

    //=====
    continueGame();
}

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const displayAlphabet = document.getElementById('randomAlphabet');
    displayAlphabet.innerText = alphabet;

    // set the high light background on key by ID
    setBackgroundHighlight(alphabet);

}


function handleKeyboardButtonPress(e) {
    // player pressed key
    const playerPressed = e.key;
    

    // get the expected key to press
    const currentAlphabetElement = document.getElementById('randomAlphabet').innerText;
    const expectedAlphabet = currentAlphabetElement.toLowerCase();

    console.log(playerPressed, 'and', expectedAlphabet);

    // check right and wrong key pressed
    if(playerPressed === expectedAlphabet) {
        // start a new round
        continueGame();
        removeBackgroundHighlight(expectedAlphabet);

        // Using it without function -------------------------------------------------------------------
        
        //--- Update the score by 3 step:
        // 1. get the current score
        const currentScoreElement = document.getElementById('gameScore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // 2. increase the score by 1  
        const newScore = currentScore + 1;
        console.log('new score', newScore)
        // 3. show the updated score
        currentScoreElement.innerText = newScore;

    }

    else {
        // Reduce your life by 3 step:
        // 1. get the life point 
        const lifePoint = document.getElementById('lifePoint');
        const lifePointText = lifePoint.innerText;
        const getLife = parseInt(lifePointText);
        
        // 2. reduce the life point 
        const reduceLife = getLife - 1;

        // 3. show the life point
        lifePoint.innerText = reduceLife;

        if(reduceLife === 0) {
            gameOver();
        }

    }




}
// capture keyboard key press 
document.addEventListener('keyup',handleKeyboardButtonPress);





function gameOver() {
    // when the life is finished then hide the play ground
    const groundHide = hideElementById('playGround');

    // After finish the life show score section for show the score
    const showScoreSec = showElementById('showScore');

    // show the score 
    const showCurrentScore = document.getElementById('gameScore');
    const showScore = showCurrentScore.innerText;
    
    // get the element to show score
    const putFinalScore = document.getElementById('finalScore');
    putFinalScore.innerText = showScore;
}