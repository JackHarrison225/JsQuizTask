//use Calculator
document.getElementById("CalcScreen").hidden = true;

class Calculator{
     constructor(curOperation, prevOperation){
          this.curOperation = curOperation;
          this.prevOperation = prevOperation;
          this.clear();
     }

     clear()
     {
          this.curOperation = "";
          this.prevOperation = "";
          this.operation = undefined;
     }

     delete()
     {

     }

     changeNumber(number)
     {

     }

     chooseOperation(operation)
     {

     }

     Compute()
     {

     }

     changeDisplay()
     {

     }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equal]')
const prevOperation = document.querySelector('[data-previous-operation]')
const curOperation = document.querySelector('[data-current-operation]')


const calculator = new Calculator(curOperation, prevOperation)

function StartCalc()
{
     document.getElementById("StartScreen").hidden = true;
     document.getElementById("CalcScreen").hidden = false;
}

