/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
let catchPhrases = [''];

headDropdown.addEventListener('change', (e) => {
     // get the value of the head dropdown
    const value = e.target.value;
    console.log(value);
    headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', (e) => {
    // get the value of the middle dropdown
    const value = e.target.value;
    middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
    // increment the middle change count state
    middleCount++;
    
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', (e) => {
    // get the value of the bottom dropdown
    const value = e.target.value;
    bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    // update the stats to show the new count (refactor to/call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const value = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchPhrases.push(value);
    console.log(value);
    // clear out the form input's value so it's empty to the user

    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, middleCount, bottomCount); 
    // call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchPhrases){
        const catchphraseInput = document.createElement('catchphrase');
        catchphraseInput.textContent = catchphrase;
        catchphraseList.append(catchphrase);
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
// don't forget to TDD!!!