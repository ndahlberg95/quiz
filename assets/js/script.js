console.log ("Hello!")

var questions = [
    {
        prompt: "Question 1?",
        answer: "Answer 1."
    },
    {
        prompt: "Question 2?",
        answer: "Answer 2."
    },
    {
        prompt: "Question 3?",
        answer: "Answer 1."
    },
    {
        prompt: "Question 4?",
        answer: "Answer 1."
    },
    {
        prompt: "Question 5?",
        answer: "Answer 1."
    },
    {
        prompt: "Question 6?",
        answer: "Answer 1."
    }
]
var score = 0;
var timer = 60;


//Step 1: Bring the HTML element into the JavaScript (get element by ID)
//Step 2: Get the data in the same location
//Step 3: Change the HTML element to the data

var btn = document.querySelector(".startBtn")
    console.log (btn)

var p = document.querySelector(".text")
    console.log (p)

var q2 = document.querySelector(".question2")
    console.log (q2)

var questionIndex = 0

btn.addEventListener ("click", function(){
    console.log ("yay!")
    console.log (questions[questionIndex].prompt)
    p.innerText = questions[questionIndex].prompt
    questionIndex++
})

//When all questions are answered OR time runs out:

// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt (questions[i].prompt)
//     if (respone == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         timer - 10;
//         alert("Wrong!");
//     };
//     alert ("You got ", score + "/", questions.length)
// }

// function countdown(seconds) {
//     var seconds = 60;
//     function tick() {
//         var counter = document.getElementById("timer");
//         counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             gameOver(tick, 1000);
//         } else {
//             if(seconds > 1){
//                 countdown(seconds-1);           
//             }
//         }
//     }
//     tick();
// }


// function gameOver() {
//     alert("Game Over!");
//     //display score
//     //enter initials
//     //save
//   }
//   setTimeout(gameOver, 60000);