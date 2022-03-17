// LESSON 31 - EVENTS 
// 1. Create an html-page for displaying and editing text. 
//   When opening the page, the text should be displayed with div tag. 
//   When clicking Ctrl+E, textarea appears instead of div and can be edited. 
//   When pressing Ctrl+S, the div with edited text appears instead of textarea. 
//   Don’t forget to turn off default settings for these hotkey combinations.

// POINTERS
const beforeName = document.getElementById('beforeName');
const enterName = document.getElementById('enterName');
const afterName = document.getElementById('afterName');
const addName = document.getElementById('addName');
const descriptionChange = document.getElementById('descriptionChange');

function enterNameDisplay() {
    // Hide inital text and show textarea
    beforeName.classList.add('hidden');
    enterName.classList.remove('hidden');    
}

function NameDisplay () {
    // Hide textbox and show new name
    enterName.classList.add('hidden');
    beforeName.classList.remove('hidden');
    // Save Name entered
    const nameEntered = document.getElementById('enterNameTextarea').value;
    // Change text of H1 to new name entered & description to edit option
    addName.innerText = (`HELLO ${nameEntered}!!`);
    descriptionChange.innerText = (`Click Ctrl+E to edit your name!`);
}

// FUNCTION THAT CALLS DIFFERENT FUNCTIONS DEPENDING ON THE KEYS PRESSED
function keyListener(event) {
    if (event.key == 'e' && event.ctrlKey) {
        event.preventDefault();
        enterNameDisplay();        
    }
    if (event.key == 's' && event.ctrlKey) {
        event.preventDefault();
        NameDisplay ();
    }
}

// CALLING FUNCTION ON KEYDOWN EVENT
document.addEventListener('keydown', keyListener);