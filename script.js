var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var startTimer = document.getElementById("startTimer");
var stopTimer = document.getElementById("stopTimer");



// object for question 1//
var firstQuestion = {
    question: "What is UC Irvine's mascot?",
    answers: ["Shark", "Elephant", "Lion", "ant-eater"],
    answersCorrect: "ant-eater",
}
//object for question 2//
var secondQuestion = {
    question: "What is the capital of California?",
    answers: ["San Francisco", "Los Angeles", "Sacramento", "San Diego"],
    answersCorrect: "Sacramento",
}

//object for question 3//
var thirdQuestion = {
    question: "What is the capital of Virginia?",
    answers: ["Richmond", "Alexandria", "Hampton", "Virginia Beach"],
    answersCorrect: "Richmond",
}

//object for question 4//
var fourthQuestion = {
    question: "What is the capital of Silicon Valley?",
    answers: ["San Francisco", "San Jose", "Palo Alto", "Santa Clara"],
    answersCorrect: "San Jose",
}

//user input empty array//
var userInput = [];
var currentQuestionIndex = 0;
var score = 0;


//logic to display question//

if question.count == 1 (){
    questionElement.innerText = questions[currentQuestionIndex].question;
    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
        const button = document.createElement("button");
        button.innerText = questions[currentQuestionIndex].answers[i];
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("id", "answer-buttons");
        button.setAttribute("onclick", "checkAnswer1(this.id)");
        questionElement.appendChild(button);
    }
}


//checks user input to see if answer is correct//
function checkAnswer1(userInput) {
    if (userInput === firstQuestion.answersCorrect) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
}

function checkAnswer2(userInput) {
    var questionTwoInput = (e) >= onclick;
    if (questionTwoInput === secondQuestion.answersCorrect) {
        alert("Correct!");
                score++;
            } else {
}

function checkAnswer3(answer) {
    var questionThreeInput = (e) >= onclick;
    if (answer === firstQuestion.answersCorrect) {
        alert("Correct!");
                score++;
            } else {
        alert("Wrong!");
        }


##############################################    
//logic to dipslay next question//
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert("You have completed the quiz!");
    }
}

function showQuestion() {
    questionElement.innerText = questions[currentQuestionIndex].question;
    for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
        const button = document.createElement("button");
        button.innerText = questions[currentQuestionIndex].answers[i];
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("id", "answer-buttons");
        answerButton.appendChild(button);
    }
    nextButton.innerText = "Next";
}



//core logic to power the quiz//
function executeQuestionOne() {
if (user.input.question1 === answersCorrect) {
    alert("Correct!");
    score++;
    button1.innerText = answers2[0]
    button2.innerText = answers2[1]
    button3.innerText = answers2[2]
    button4.innerText = answers2[3]
} else {
    alert("Wrong!");
    score--;
    button1.innerText = answers1[0]
    button2.innerText = answers1[1]
    button3.innerText = answers1[2]
    button4.innerText = answers1[3]
    }
return: score;
}
}

firstButtonElement.addEventListener("click", executeQuestionOne);

var firstButtonEl = getElementById("btn-1");
var secondButtonEl = getElementById("btn-2");
var thirdButtonEl = getElementById("btn-3");
var fourthButtonEl = getElementById("btn-4");
var nextButtonEl = getElementById("next-btn");
var questionEl = document.getElementById("question");

//core logic to power the quiz//
function displayQuiz() {
    if questionCount === 2) {
        alert("Click next question to begin the quiz!");
    }
    if questionCount === 1) {
        questionEl.innerHTML= firstQuestion.question;
        firstButtonEl.innerHTML = firstQuestion.answers[0];
        secondButtonEl.innerHTML = firstQuestion.answers[1];
        thirdButtonEl.innerHTML = firstQuestion.answers[2];
        fourthButtonEl.innerHTML = firstQuestion.answers[3];
    }
    if questionCount === 2) {
        questionEl.innerHTML= secondQuestion.question;
                firstButtonEl.innerHTML = secondQuestion.answers[0];
                secondButtonEl.innerHTML = secondQuestion.answers[1];
                thirdButtonEl.innerHTML = secondQuestion.answers[2];
                fourthButtonEl.innerHTML = secondQuestion.answers[3];
    }
    if questionCount === 3 {
        questionEl.innerHTML= thirdQuestion.question;
                firstButtonEl.innerHTML = thirdQuestion.answers[0];
                secondButtonEl.innerHTML = thirdQuestion.answers[1];
                thirdButtonEl.innerHTML = thirdQuestion.answers[2];
                fourthButtonEl.innerHTML = thirdQuestion.answers[3];
    }
    if questionCount === 4 {
        questionEl.innerHTML= fourthQuestion.question;
                        firstButtonEl.innerHTML = fourthQuestion.answers[0];
                        secondButtonEl.innerHTML = fourthQuestion.answers[1];
                        thirdButtonEl.innerHTML = fourthQuestion.answers[2];
                        fourthButtonEl.innerHTML = fourthQuestion.answers[3];
    }
    else return score;
}

if i=0 to 4
i++; return score;