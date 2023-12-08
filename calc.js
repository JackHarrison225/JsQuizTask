//use Calculator
document.getElementById("CalcScreen").hidden = true;

let operation = "+";

function startCalc()
{
     document.getElementById("StartScreen").hidden = true;
     document.getElementById("CalcScreen").hidden = false;
}

function clearAll()
{
     x = "0";
     document.getElementById("current-operation").innerText = x
     document.getElementById("previous-operation").innerText = x
}

function deleteOne()
{
    x = document.getElementById("current-operation").innerText
    x = x.slice(0,-1)
    if(x == "")
    {
          x = 0
    }
    document.getElementById("current-operation").innerText = x
}

function updateNum(num)
{
     y = document.getElementById(num).innerText
     x = document.getElementById("current-operation").innerText;

     if(x == 0 && y != ".")
     {
          x = y;
     }
     else
     {
          x = x.split("");
          x.push(y);
          x = x.join("");
     }

     document.getElementById("current-operation").innerText = x
}

function setOperation(newOperation)
{
     let x = "0";
     let cur = document.getElementById("current-operation").innerText
     let prev = document.getElementById("previous-operation").innerText 

     switch (operation)
     {
          case "+":
               document.getElementById("previous-operation").innerText = Number(prev) + Number(cur);
               break;
          case "/":
               document.getElementById("previous-operation").innerText = Number(prev)/Number(cur);
               break;
          case "-":
               document.getElementById("previous-operation").innerText = Number(prev) - Number(cur);
               break;
          case "*":
               document.getElementById("previous-operation").innerText = Number(prev) * Number(cur);
               break;
     }

     document.getElementById("current-operation").innerText = x;
     operation = document.getElementById(newOperation).innerText;
}

function equals()
{
     let x = "0";
     let cur = document.getElementById("current-operation").innerText
     let prev = document.getElementById("previous-operation").innerText 

     switch (operation)
     {
          case "+":
               document.getElementById("current-operation").innerText = Number(prev) + Number(cur);
               break;
          case "/":
               document.getElementById("current-operation").innerText = Number(prev)/Number(cur);
               break;
          case "-":
               document.getElementById("current-operation").innerText = Number(prev) - Number(cur);
               break;
          case "*":
               document.getElementById("current-operation").innerText = Number(prev) * Number(cur);
               break;
     }

     operation = "+";
     document.getElementById("previous-operation").innerText = x;
}