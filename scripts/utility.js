function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundHighlight(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
function removeBackgroundHighlight(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}


function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');

    // get a random index between 0 - 25
    const randomNumber = Math.random()*26;
    const indexNumber = Math.floor(randomNumber);
    
    // get alphabet from array to using index number
    const alphabet = alphabetArray[indexNumber];
    return alphabet;
}
