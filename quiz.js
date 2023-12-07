//Quiz JS

//declare vars
let score = 0;
let currentQestion = 0;
let questionArr= [
     {
          question: "What Is the race librarian?",
          answerA: "Monkey",
          answerB: "Ape",
          answerC: "Human",
          answerD: "Goblin",
          correctAnswer: "Ape"
     },
     {
          question: "In monstrous regiment what race is Maladict?",
          answerA: "Human",
          answerB: "Egor",
          answerC: "Troll",
          answerD: "Vampire",
          correctAnswer: "Vampire"
     },
     {
          question: "What is the name of the Captain Sam Vimes' son?",
          answerA: "Detritus",
          answerB: "Dibbler",
          answerC: "Sam",
          answerD: "Mort",
          correctAnswer: "Sam"
     },
     {
          question: "Who is Deaths granddaughter?",
          answerA: "Susan",
          answerB: "Ronny",
          answerC: "Lobsang",
          answerD: "Rincewind",
          correctAnswer: "Susan"
     },
     {
          question: "Who was the Patrition in the book Night Watch?",
          answerA: "Giggling Lord Smince",
          answerB: "Lord Havelock Vetinari",
          answerC: "Homicidal Lord Winder",
          answerD: "Mad Lord Snapcase",
          correctAnswer: "Homicidal Lord Winder"
     },
     {
          question: "Who is the Post Master in going postal?",
          answerA: "Reacher Gilt",
          answerB: "Mustrum Ridcully",
          answerC: "Moist von Lipwig",
          answerD: "Mr. Gryle",
          correctAnswer: "Moist von Lipwig"
     },
     {
          question: "What is the name of deaths apprentice?",
          answerA: "Albert",
          answerB: "Mort",
          answerC: "Susan",  
          answerD: "Drumknott",
          correctAnswer: "Mort"
     }
];


//declare Functions
function PlayQuiz(Arr)
{    
     if(currentQestion+1 > Arr.length)
     {
          QuizEnd();
     }
     else{
          AskQuextion(Arr[currentQestion]); //randomQestion
          SetAnswers(Arr[currentQestion]); //randomQestion
     }
}

function AskQuextion(Arr)
{
     document.getElementById("Question").innerText = Arr.question;
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
     return PlayQuiz(questionArr)
}

function ScoreUp(){
     score++;
}

function SetTotalScore(){
     document.getElementById("Total").innerText = "You Scored " + score + "/" + questionArr.length;
}

function Home(){
     score = 0;
     currentQestion = 0;
     document.getElementById("StartScreen").hidden = false;
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("ResetScreen").hidden = true;
     document.getElementById("CalcScreen").hidden = true;
     
}
function StartQuiz(){
     document.getElementById("ResetScreen").hidden = true;
     document.getElementById("QuizScreen").hidden = false;
     document.getElementById("StartScreen").hidden = true;   
     PlayQuiz(questionArr);
}
function QuizEnd(){
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("ResetScreen").hidden = false;
     SetTotalScore();
}


//play quiz
document.getElementById("ResetScreen").hidden = true;
document.getElementById("QuizScreen").hidden = true;
PlayQuiz(questionArr)
