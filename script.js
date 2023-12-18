let buttonOne = document.getElementById("option-1");
let buttonTwo = document.getElementById("option-2");
let buttonThree = document.getElementById("option-3");
let buttonFour = document.getElementById("option-4");
let quizQuestion = document.getElementById("question");
let scoreTrackerOne = document.getElementById("scoreOne");
let scoreTrackerTwo = document.getElementById("scoreTwo");
let scoreTrackerThree = document.getElementById("scoreThree");
let scoreTrackerFour = document.getElementById("scoreFour");

let questionIndex = 0;
let score = 0;

function displayQuestion(index) {
    const question = questions[index];
    quizQuestion.innerHTML = question.question;
    buttonOne.innerHTML = question.option1;
    buttonTwo.innerHTML = question.option2;
    buttonThree.innerHTML = question.option3;
    buttonFour.innerHTML = question.option4;
}

function checkAnswer(selectedAnswer) {
    const question = questions[questionIndex];
    if (selectedAnswer === question.correct) {
        score++;
        console.log(`Correct! The answer is ${question.correct}.`);
    } else {
        console.log(`Incorrect. The correct answer is ${question.correct}.`);
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        displayQuestion(questionIndex);
    } else {
        console.log(`Quiz completed. Your score is ${score}/${questions.length}.`);
    }
}

buttonOne.addEventListener("click", function () {
    checkAnswer(buttonOne.innerHTML);
});

buttonTwo.addEventListener("click", function () {
    checkAnswer(buttonTwo.innerHTML);
});

buttonThree.addEventListener("click", function () {
    checkAnswer(buttonThree.innerHTML);
});

buttonFour.addEventListener("click", function () {
    checkAnswer(buttonFour.innerHTML);
});

displayQuestion(questionIndex);

 // Function to check user answer and display result
 function checkAnswer(questionId, userAnswer) {
   // Find the question object with the given ID
   const question = questions.find((q) => q.id === questionId);
 
   // Check if the user answer is correct
   if (userAnswer === question.correct) {
     console.log(`Correct! The answer is ${question.correct}.`);
   } else {
     console.log(`Incorrect. The correct answer is ${question.correct}.`);
   }
 }
 
 // Call the checkAnswer function with the user's answer
 checkAnswer("0", "Ant-eater");


// Question 1 Object
const questionContentOne = 
        {id: "0",
        question: "What is UC Irvine's mascot?",
        option1: "Shark",
        option2: "Elephant",
        option3: "Lion",
        option4: "ant-eater",
        correct: "ant-eater",
        };

// Question 2 Object
const questionContentTwo = { 
        id: "1",
        question: "What is the capital of California?",
        option1: "San Francisco",
        option2: "Los Angeles",
        option3: "Sacramento",
        option4: "San Diego",
        correct: "Sacramento",
    };

// Question 3 Object
const questionContentThree = {
        id: "2",
        question: "What is the capital of Virginia?",
        option1: "Richmond", 
        option2: "Alexandria",
        option3: "Hampton",
        option4: "Virginia Beach",
        correct: "Richmond",
    };

// Question 4 Object
const questionContentFour = {
        id: "3",
        question: "What is the capital of Silicon Valley?",
        option1: "San Francisco",
        option2: "San Jose",
        option3: "Palo Alto",
        option4: "Santa Clara",
        correct: "San Jose",
        };

  // Define an array of question objects
 const questions = [
   {
     id: "0",
     question: "What is UC Irvine's mascot?",
     option1: "Shark",
     option2: "Elephant",
     option3: "Lion",
     option4: "Ant-eater",
     correct: "Ant-eater",
   },
   {
     id: "1",
     question: "What is the capital of California?",
     option1: "San Francisco",
     option2: "Los Angeles",
     option3: "Sacramento",
     option4: "San Diego",
     correct: "Sacramento",
   },
   {
     id: "2",
     question: "What is the capital of Virginia?",
     option1: "Richmond",
     option2: "Alexandria",
     option3: "Hampton",
     option4: "Virginia Beach",
     correct: "Richmond",
   },
   {
     id: "3",
     question: "What is the capital of Silicon Valley?",
     option1: "San Francisco",
     option2: "San Jose",
     option3: "Palo Alto",
     option4: "Santa Clara",
     correct: "San Jose",
   },
 ];