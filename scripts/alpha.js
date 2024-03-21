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

//==== If press Escape before game start it still stay the home page
// document.addEventListener('keyup',pressEscapeBeforeStartGame);
// function pressEscapeBeforeStartGame(e) {
//     const pressEscape = e.key;
//     if(pressEscape === 'Escape') {
//         hideElementById('showScore');
//     }
// }

//===== 1st function for play
function play() {
    //===== Start First Step For Start The Game
    hideElementById('home-screen');
    showElementById('playGround');
    //===== End First Step For Start The Game



    //===== When click play again then hide the score section
    hideElementById('showScore')

    // When play again then reset the life and score 
    setElementValueById('lifePoint', 5);
    setElementValueById('gameScore', 0);

    //===== Continue game 
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

    document.addEventListener('keyup', function (e) {
        const keyDetect = e.key;

        // stop the game if pressed 'Esc'
        if (keyDetect === 'Escape') {
            gameOver();
        }

    });







}

// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardButtonPress);
function handleKeyboardButtonPress(e) {
    // player pressed key
    const playerPressed = e.key;

    // get the expected key to press
    const currentAlphabetElement = getElementTextById('randomAlphabet');
    const expectedAlphabet = currentAlphabetElement.toLowerCase();

    // console.log(playerPressed, 'and', expectedAlphabet);

    // check right and wrong key pressed
    if (playerPressed === expectedAlphabet) {


        // step-1: get the current score
        const theScore = getElementValueById('gameScore');
        // step-2: increase the score by 1  
        const yourScore = theScore + 1;
        // step-3: show the updated score
        const gameScore = setElementValueById('gameScore', yourScore);


        // Using it without function -------------------------------------------------------------------
        //--- Update the score by 3 step:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('gameScore');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // 2. increase the score by 1  
        // const newScore = currentScore + 1;
        // console.log('new score', newScore)
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;


        // start a new alphabet round
        continueGame();
        removeBackgroundHighlight(expectedAlphabet);

    }

    else {
        // 1. get the life point 
        const life = getElementValueById('lifePoint');
        // 2. reduce the life point by 1
        const updatedLife = life - 1;
        // 3. show the life point
        const gameLife = setElementValueById('lifePoint', updatedLife);

        // console.log(updatedLife);

        // Using it without function -------------------------------------------------------------------
        // Reduce your life by 3 step:
        // 1. get the life point 
        // const lifePoint = document.getElementById('lifePoint');
        // const lifePointText = lifePoint.innerText;
        // const getLife = parseInt(lifePointText);

        // 2. reduce the life point 
        // const reduceLife = getLife - 1;

        // 3. show the life point
        // lifePoint.innerText = reduceLife;

        if (updatedLife === 0) {
            gameOver();
        }

    }

}


function gameOver() {
    // when the life is finished then hide the play ground
    hideElementById('playGround');

    // After finish the life show score section for show the score
    showElementById('showScore');

    // Show the Final score when over the game
    const finalGameScore = document.getElementById('gameScore').innerText;
    setElementValueById('finalScore', finalGameScore);

    // console.log(finalGameScore);


    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('randomAlphabet');
    removeBackgroundHighlight(currentAlphabet);

    document.addEventListener('keypress',function(event){
        const pressEnter = event.key;
        console.log(pressEnter)
        if(pressEnter === 'q') {
            document.getElementById('playAgain').click();
        }

    });




}