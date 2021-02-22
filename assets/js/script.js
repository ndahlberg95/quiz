var startBtn = document.querySelector(".startBtn")
var score = 0;
var countdownTimer;
var timer = 60;
var counter = document.getElementById("timer");
var questionIndex = 0;
var questionText;
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");
var correctAnswers = "";
var initials = "";
var saveBtn = document.querySelector(".saveBtn");
var questions = [
    {
        prompt: "How do you format an array?",
        answers: {
            a: "a. var arrayName = [item1, item2, item3];",
            b: "b. var arrayName = (item1, item2, item3);",
            c: "c. var arrayName [item1, item2, item3];",
            d: "d. a and b",
        },
        correctAnswer: "a",
    },
    {
        prompt: "How do you call a function?",
        answers: {
            a: "a. function ()",
            b: "b. function {}",
            c: "c. (function)",
            d: "d. function []",
        },
        correctAnswer: "a",
    },
    {
        prompt: "What will create a pop-up box?",
        answers: {
            a: "a. confirm",
            b: "b. alert",
            c: "c. prompt",
            d: "d. all of the above",
        },
        correctAnswer: "d",
    },
    {
        prompt: "What is the correct way to assign no value to something in JavaScript?",
        answers: {
            a: "a. n/a",
            b: "b. 0",
            c: "c. NULL",
            d: "d. N/A",
        },
        correctAnswer: "c",
    },
    {
        prompt: "Which punctuation is used for comments in JavaScript?",
        answers: {
            a: "a. //Comment Here",
            b: "b. /Comment Here",
            c: "c. /*Comment Here*/",
            d: "d. *Comment Here*",
        },
        correctAnswer: "a",
    },
    {
        prompt: "Which is correctly formatted?",
        answers: {
            a: "a. <script> src='./assets/js/script.js' </script>",
            b: "b. <script src='./assets/js/script.js'></script>",
            c: "c. <script src=./assets/js/script.js></script>",
            d: "d. <script src='./assets/js/script.js'><script>",
        },
        correctAnswer: "b",
    }
];

document.getElementById("quiz").style.display = "none";
document.getElementById("summary").style.display = "none";


//When the start button is clicked, the first question will appear and the countdown will begin.

startBtn.addEventListener("click", function startClicked() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("quiz").style.display = "initial";
    document.getElementById("question").innerText = questions[0].prompt;
    document.getElementById("a").innerText = questions[0].answers.a;
    document.getElementById("b").innerText = questions[0].answers.b;
    document.getElementById("c").innerText = questions[0].answers.c;
    document.getElementById("d").innerText = questions[0].answers.d;
    countdownTimer = setInterval(countdown, 1000);
})


//When an answer is clicked, the next question will appear.

function answerClicked(input) {
    console.log(input.target.id);
    questionIndex = questionIndex + 1;
    console.log(questions, questionIndex, questions[questionIndex]);

    if (questionIndex == questions.length) {
        return gameOver()
    }

    //Check answers:
    if ((input.target.id) == questions[questionIndex].correctAnswer) {
        console.log("Correct!")
        score++;
    } else {
        console.log("Wrong!")
        timer = timer - 10;
    };

    questionText = questions[questionIndex].prompt
    document.getElementById("question").innerText = questions[questionIndex].prompt;
    document.getElementById("a").innerText = questions[questionIndex].answers.a;
    document.getElementById("b").innerText = questions[questionIndex].answers.b;
    document.getElementById("c").innerText = questions[questionIndex].answers.c;
    document.getElementById("d").innerText = questions[questionIndex].answers.d;
}

btnA.addEventListener("click", answerClicked)
btnB.addEventListener("click", answerClicked)
btnC.addEventListener("click", answerClicked)
btnD.addEventListener("click", answerClicked)

function countdown() {
    if (timer > 0) {
        counter.innerText = timer;
        timer--
    } else {
        console.log(timer, "else")
        counter.innerText = 0;
        gameOver()
    }
}

function gameOver() {
    clearInterval(countdownTimer);
    document.getElementById("summary").style.display = "initial";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").innerText = "Score: " + score;   
}

saveBtn.addEventListener("click", function initials () {
    var initials = document.getElementById("initials").value;
    localStorage.setItem (initials, score)
    console.log ("These are the initials:", initials);
})



var asdf = localStorage.getItem ("foo")

console.log (asdf)