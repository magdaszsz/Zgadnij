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

/************ close pop up *********** */
for(let modal of closeModal) {
  modal.addEventListener('click', function(e){
    e.target.parentNode.classList.remove('showModal');
  }
  )
}

const clearInput = function() {
  userInput.value= '';
}

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


const randomizeWords = function() {
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = words[randomIndex];
  words.splice(randomIndex,1);
  pair.push(word);
  let hint = hints[randomIndex];
  hints.splice(randomIndex,1);
  pair.push(hint);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const displayWords = function() {
  scrambledWord = pair[0].split('');
  let guess = shuffleArray(scrambledWord).join(' ');
  word.innerHTML = `<h1>${guess}</h1>`;
  message.innerHTML = `<h1>${pair[1]}</h1>`;
  }


/*function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
return array;
}*/

const checkArray = function() {
  if(words.length === 0) {
    game.classList.add('show');
  }
}



/*const shuffleArray = function(array) {
  const a = array.slice();

  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

console.log(shuffleArray(words));*/
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

/************* reload page************/

reload.addEventListener('click', function() {
  window.location.reload();
})



