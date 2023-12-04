//Quiz JS


//declare vars
let score = 0;
let currentQestion = 0;
let questionArr= [
     {
          question: "question 1",
          answerA: "correct",
          answerB: "aswer 2",
          answerC: "aswer 3",
          answerD: "aswer 4",
          correctAnswer: "correct"
     },
     {
          question: "question 2",
          answerA: "aswer 1",
          answerB: "correct",
          answerC: "aswer 3",
          answerD: "aswer 4",
          correctAnswer: "correct"
     },
     {
          question: "question 3",
          answerA: "aswer 1",
          answerB: "aswer 2",
          answerC: "aswer 3",
          answerD: "correct",
          correctAnswer: "correct"
     },
     {
          question: "question 4",
          answerA: "aswer 1",
          answerB: "correct",
          answerC: "aswer 3",
          answerD: "aswer 4",
          correctAnswer: "correct"
     },
     {
          question: "question 5",
          answerA: "aswer 1",
          answerB: "aswer 2",
          answerC: "tapioka",
          answerD: "aswer 4",
          correctAnswer: "correct"
     },
];


//declare Functions
function PlayQuiz(Arr, i)
{
     if((i+1) > (Arr.length))
     {
          QuizEnd();
     }
     else{
          AskQuextion(Arr[i]);
          SetAnswers(Arr[i]);
     }
     
}

function AskQuextion(Arr)
{
     document.getElementById("Question").innerText = Arr.question;
     console.log(Arr.question)
}

//this function could be done in a better way 
function SetAnswers(x)
{    
     let y = Math.floor(Math.random() * 4)

     
     switch(y){
          case 0:
               document.getElementById("ans1").innerText = x.answerA;
               document.getElementById("ans2").innerText = x.answerB;
               document.getElementById("ans3").innerText = x.answerC;
               document.getElementById("ans4").innerText = x.answerD;
               break;

          case 1:
               document.getElementById("ans1").innerText = x.answerB;
               document.getElementById("ans2").innerText = x.answerC;
               document.getElementById("ans3").innerText = x.answerD;
               document.getElementById("ans4").innerText = x.answerA;
               break;

          case 2:
               document.getElementById("ans1").innerText = x.answerA;
               document.getElementById("ans2").innerText = x.answerC;
               document.getElementById("ans3").innerText = x.answerB;
               document.getElementById("ans4").innerText = x.answerD;
               break;

          case 3:
               document.getElementById("ans1").innerText = x.answerD;
               document.getElementById("ans2").innerText = x.answerA;
               document.getElementById("ans3").innerText = x.answerB;
               document.getElementById("ans4").innerText = x.answerC;
               console.log(x.answerC);
               break;
     }

}

function CheckAnswer(ansID)
{
     let answerGiven = document.getElementById(ansID).innerText;
     if(answerGiven == questionArr[currentQestion].correctAnswer)
     {
          ScoreUp();
     }

     currentQestion++;
     return PlayQuiz(questionArr, currentQestion)
}

function ScoreUp(){
     score++;
}

function SetTotalScore(){
     document.getElementById("Total").innerText = "You Scored " + score;
}

function RestartQuiz(){
     score = 0;
     currentQestion = 0;
     document.getElementById("StartScreen").hidden = false;
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("ResetScreen").hidden = true;
     
}
function StartQuiz(){
     document.getElementById("ResetScreen").hidden = true;
     document.getElementById("QuizScreen").hidden = false;
     document.getElementById("StartScreen").hidden = true;   
     PlayQuiz(questionArr, currentQestion)
}
function QuizEnd(){
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("ResetScreen").hidden = false;
     SetTotalScore();
}


//play quiz
PlayQuiz(questionArr, currentQestion)
document.getElementById("ResetScreen").hidden = true;
document.getElementById("QuizScreen").hidden = true;
