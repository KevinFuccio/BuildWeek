let pag2 = new URLSearchParams(location.search);
let pagCorrent = pag2.get("pagina2") ;
const questionElement = document.getElementById("title");
questionElement.id = "title";                                   
let questionButtons = document.getElementById("mainArgument");

//Button when an answer is clicked
let nextButton = function () {
  let selector = document.querySelector("#buttonGo");
  let button = document.createElement("button");
  button.id = "nextButton";
  button.textContent = "NEXT";
  selector.appendChild(button);
  button.addEventListener("click", countAndAnswer);
  nextButton = () => {};
};
function countAndAnswer() {
  resetAnswer();
  quizCounter();
  cycleQuiz();
  validation();
}

//Counter for the quitz
let quizCount = 1;
let quizCounter = function () {
  document.querySelector("#questions").innerHTML = quizCount++;
  if (quizCount >= 12) {
    lastAnswer()
  
  }
};
quizCounter();
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let score = 0
let sbagliate = 0;

let questionsNewArr = [];
for (let i = 0; i < questions.length; i++) {
  const elementCorrect = questions[i].correct_answer;
  const arr = new Array(elementCorrect);
  const elementIncorrect = questions[i].incorrect_answers;
  let push = arr.concat(elementIncorrect);
  questionsNewArr.push(push);
}
let correctAnswerArr = []
for (let i = 0; i < questions.length; i++) {
  const element = questions[i].correct_answer;
  const arr = new Array(element)
  correctAnswerArr.push(arr)
}

function resetAnswer() {
  while (questionButtons.firstChild) {
    questionButtons.removeChild(questionButtons.firstChild);
  }
}

// Text inside H1 and Buttons
let nArray = 0;
let cycleQuiz = function () {
  questionElement.innerHTML = questions[nArray].question;
  questionsNewArr[nArray++].forEach((element) => {
    btn = document.createElement("button");
    btn.innerText = element;
    btn.classList.add("buttons");
    btn.addEventListener("click",function(){
      validation(this, nArray)
    });
    questionButtons.appendChild(btn);
  });
  questionButtons.addEventListener("click", nextButton, { once: true });
};
function validation(button,question){
  if(correctAnswerArr[question -1] == button.innerText){
    score++
  }
  else{
    sbagliate++
  }
}

cycleQuiz();
function lastAnswer(){
 questionElement.innerHTML = "Quiz completato, premi 'risultato' per vedere il tuo punteggio!"
 let counter = document.querySelector(".foot")
 counter.parentNode.removeChild(counter)
 let btnRemove = document.getElementById("buttonGo")
 btnRemove.parentNode.removeChild(btnRemove)
 let newBtn = document.createElement("button")
 newBtn.innerText ="RISULTATO"
 newBtn.id= "finalBtn"
 questionButtons.appendChild(newBtn)
 newBtn.addEventListener('click', finalBtn )  
}
function finalBtn(e){
  e.onclick = location.assign(`/result.html?giuste=${score}&max=${questions.length}&sbagliate=${sbagliate}`)
}
