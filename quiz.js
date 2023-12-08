//Quiz JS

//play quiz
document.getElementById("ResetScreen").hidden = true;
document.getElementById("QuizScreen").hidden = true;
document.getElementById("FailScreen").hidden = true;
document.getElementById("Q1").hidden = true;
document.getElementById("Q2").hidden = true;
document.getElementById("Q3").hidden = true;
document.getElementById("Q4").hidden = true;
document.getElementById("Q5").hidden = true;
document.getElementById("Q6").hidden = true;
document.getElementById("Q7").hidden = true;
document.getElementById("Q8").hidden = true;

//declare vars
let score = 0;
let currentQestion = 0;
let questionArr= [
     {
          questionNumber: "Q1",
          question: "What Is the species librarian?",
          answerA: "Monkey",
          answerB: "Ape",
          answerC: "Human",
          answerD: "Goblin",
          correctAnswer: "Ape",
          veryWrongAnswer: "Monkey"
     },
     {
          questionNumber: "Q2",
          question: "In monstrous regiment what does maladict the vampire drink?",
          answerA: "Coco",
          answerB: "Blood",
          answerC: "Tea",
          answerD: "Coffee",
          correctAnswer: "Coffee",
          veryWrongAnswer: "Blood"
     },
     {
          questionNumber: "Q3",
          question: "What is the name of the Captain Sam Vimes' son?",
          answerA: "Detritus",
          answerB: "Dibbler",
          answerC: "Sam",
          answerD: "Nobby",
          correctAnswer: "Sam",
          veryWrongAnswer: "Nobby"
     },
     {
          questionNumber: "Q4",
          question: "Who is Deaths granddchild?",
          answerA: "Susan",
          answerB: "Ronny",
          answerC: "Lobsang",
          answerD: "Rincewind",
          correctAnswer: "Susan",
          veryWrongAnswer: "Ronny"
     },
     {
          questionNumber: "Q5",
          question: "Who was the Patrition in the book Night Watch?",
          answerA: "Giggling Lord Smince",
          answerB: "Lord Havelock Vetinari",
          answerC: "Homicidal Lord Winder",
          answerD: "Mad Lord Snapcase",
          correctAnswer: "Homicidal Lord Winder",
          veryWrongAnswer: "Lord Havelock Vetinari"
     },
     {
          questionNumber: "Q6",
          question: "Who is the Post Master in going postal?",
          answerA: "Reacher Gilt",
          answerB: "Mustrum Ridcully",
          answerC: "Moist von Lipwig",
          answerD: "Mr. Gryle",
          correctAnswer: "Moist von Lipwig",
          veryWrongAnswer: "Mr. Gryle"
     },
     {
          questionNumber: "Q7",
          question: "What is the name of deaths apprentice?",
          answerA: "Albert",
          answerB: "Mort",
          answerC: "Susan",  
          answerD: "Binky",
          correctAnswer: "Mort",
          veryWrongAnswer: "Binky"
     },
     {
          questionNumber: "Q8",
          question: "Finsish the sentance. Truth, Freedom, Justic, reasoably priced Love and ... ",
          answerA: "a big stake slice",
          answerB: "a nice juicy burger",
          answerC: "a sprig of lilic",  
          answerD: "a hard boiled egg",
          correctAnswer: "a hard boiled egg",
          veryWrongAnswer: "a sprig of lilic"
     }
];

//declare Functions
function playQuiz(Arr)
{    
     if(currentQestion+1 > Arr.length)
     {
          quizEnd();
     }
     else{
          askQuextion(Arr[currentQestion]);
          setAnswers(Arr[currentQestion]);
     }
}

function askQuextion(Arr)
{
     document.getElementById("Question").innerText = Arr.question;
}

//this function could be done in a better way 
function setAnswers(x)
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

function checkAnswer(ansID)
{
     let answerGiven = document.getElementById(ansID).innerText;
     if(answerGiven == questionArr[currentQestion].correctAnswer)
     {
          scoreUp();
          currentQestion++;
          return playQuiz(questionArr)
     }
     else if(answerGiven == questionArr[currentQestion].veryWrongAnswer)
     {
          document.getElementById("QuizScreen").hidden = true;
          document.getElementById("FailScreen").hidden = false;
          document.getElementById(questionArr[currentQestion].questionNumber).hidden = false;
          return
     }
     else
     {
          currentQestion++;
          return playQuiz(questionArr)
     }

}

function scoreUp()
{
     score++;
}

function setTotalScore()
{
     document.getElementById("Total").innerText = "You Scored " + score + "/" + questionArr.length;
}

function home()
{
     score = 0;
     currentQestion = 0;
     document.getElementById("StartScreen").hidden = false;
     document.getElementById("ResetScreen").hidden = true;
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("FailScreen").hidden = true;
     document.getElementById("CalcScreen").hidden = true;
     document.getElementById("Q1").hidden = true;
     document.getElementById("Q2").hidden = true;
     document.getElementById("Q3").hidden = true;
     document.getElementById("Q4").hidden = true;
     document.getElementById("Q5").hidden = true;
     document.getElementById("Q6").hidden = true;
     document.getElementById("Q7").hidden = true;
     document.getElementById("Q8").hidden = true;
}

function startQuiz()
{
     document.getElementById("ResetScreen").hidden = true;
     document.getElementById("QuizScreen").hidden = false;
     document.getElementById("StartScreen").hidden = true;   
     playQuiz(questionArr);
}

function quizEnd()
{
     document.getElementById("QuizScreen").hidden = true;
     document.getElementById("ResetScreen").hidden = false;
     setTotalScore();
}
