const words = ['szezlong', 'szlafrok', 'awokado', 'czekolada'];
const hints = ['Słowo z francuskiego oznaczające \'długie krzesło\'', 'Słowo z niemieckiego oznaczające \'marynarka do spania\'', 'Ten superfood stał się żyłą złota dla południowoamerykańskich karteli', 'Z języka nahuatl, może być biała, deserowa, nadziewana'];

const shownWord = document.querySelector('.word');
const userInput = document.querySelector('input');
const button = document.querySelector('.playBtn');
const message = document.querySelector('.hint');
const word = document.querySelector('.word');
const game = document.querySelector('.gameOver');
const reload = document.querySelector('.reload');
const welcome = document.querySelector('.welcome-message');
const closeModal = document.querySelectorAll('.fas');
const wrong = document.querySelector('.wrong');
const blank = document.querySelector('.blank');
let clicked = false;

/********* function shuffeling an array********/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/************ close pop up *********** */
for(let modal of closeModal) {
  modal.addEventListener('click', function(e){
    e.target.parentNode.parentNode.classList.remove('showModal');
  }
  )
}

/*************** clear input***********/

const clearInput = function() {
  userInput.value= '';
}

/************* reload page************/

reload.addEventListener('click', function() {
  window.location.reload();
})

/************ start game at enter ********/

userInput.addEventListener('keydown', function(e) {
  if(e.keyCode === 13) {
    checkAnwser();
    clearInput();
  }
 })



button.addEventListener('click', function() {
  if(!clicked) {
    clicked = true;
    welcome.style.display = "none";
    checkArray();
    userInput.style.display = "block";
    button.style.visibility = "hidden";
    randomizeWords();
    displayWords();
  } 
})

let pair = [];


let scrambledWord = '';

/************** get a random word and a hint *****/
const randomizeWords = function() {
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = words[randomIndex];
  words.splice(randomIndex,1);
  pair.push(word);
  let hint = hints[randomIndex];
  hints.splice(randomIndex,1);
  pair.push(hint);
}

/********* display the word and the hint ***********/

const displayWords = function() {
  scrambledWord = pair[0].split('');
  let guess = shuffleArray(scrambledWord).join(' ');
  word.innerHTML = `<h1>${guess}</h1>`;
  message.innerHTML = `<h1>${pair[1]}</h1>`;
  }

/********* check if the anwser is correct**************/
const checkAnwser = function() {
  if(userInput.value === pair[0]) {
    word.innerHTML = `<h1>${pair[0]}</h1`;
    message.innerHTML = `<h1>Brawo!</h1>`;
    userInput.style.display = "none";
    pair = [];
    clicked = false;
    button.style.visibility = "visible";
  } else if (userInput.value === '') {
    blank.classList.add('showModal');
  } else {
    wrong.classList.add('showModal');
  }
}

 /************* end the game if all the words have been shown ********/

 const checkArray = function() {
  if(words.length === 0) {
    game.classList.add('show');
  }
}



