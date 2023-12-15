
// object for question 1//
var firstQuestion = {
    question: "What is UC Irvine's mascot?",
    answers: ["Shark", "Elephant", "Lion", "ant-eater"],
    answersCorrect: "ant-eater",
}

var secondQuestion = {
    question: "What is the capital of California?",
    answers: ["San Francisco", "Los Angeles", "Sacramento", "San Diego"],
    answersCorrect: "Sacramento",
}

var thirdQuestion = {
    question: "What is the capital of Virginia?",
    answers: ["Richmond", "Alexandria", "Hampton", "Virginia Beach"],
    answersCorrect: "Richmond",
}

var fourthQuestion = {
    question: "What is the capital of Silicon Valley?",
    answers: ["San Francisco", "San Jose", "Palo Alto", "Santa Clara"],
    answersCorrect: "San Jose",
}

if 
//checks user input to see if answer is correct//
function checkAnswer1(answer) {
    if (answer === firstQuestion.answersCorrect) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
}

function checkAnswer2(answer) {
    if (answer === firstQuestion.answersCorrect) {
        alert("Correct!");
                score++;
            } else {
}

function checkAnswer3(answer) {
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
if (user input question1 === answersCorrect) {
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