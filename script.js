let question = document.getElementById("question");
let answerButton = document.getElementById("showAnswer");
let answer = document.getElementById("answer");
let nextQuestion = document.getElementById("nextQuestion");
let index;

let quiz = {
  "What is a data type?": "a piece of information",
  "What is a boolean value?": "A true or false value",
  "What is an object?": "A data type with methods and properties",
  "What are primitive types?": "Boolean, Strings, numbers",
  "What is a function?": "A reusable block of code",
  "What is encapsulation?": "Encapsulation is hiding logic. Abstracting complexity."  
}

let arrayOfAnswers = Object.values(quiz);

index = displayQuizQuestion(quiz);
console.log(index);

answerButton.addEventListener('click', function(){
  displayAnswer(quiz, index);
});

nextQuestion.addEventListener('click',function(){
  index = displayQuizQuestion(quiz);
});


function displayAnswer(quiz, randomIndex){
  let arrayOfAnswers = Object.values(quiz);
  answer.innerHTML = arrayOfAnswers[randomIndex]
}

function displayQuizQuestion(quiz) {
  let arrayOfQuestions = Object.getOwnPropertyNames(quiz);
  console.log(arrayOfQuestions)
  let randomIndex = Math.floor(Math.random() * arrayOfQuestions.length)
  console.log(randomIndex);
  question.innerHTML = arrayOfQuestions[randomIndex];
  answer.innerHTML = "";

  return randomIndex;
}