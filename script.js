//prompt to restart calculator
function runCalc(){
    let runAgain = true;

    while(runAgain){

//Get users equation
let equation = prompt("Enter a mathematical equation:");

//add x as multiplication operator
equation = equation.replace("x", "*");

//declare numbers so they are not block scoped
let num1;
let num2;

// identify operator
let operator;
if (equation.includes("+")) {
    operator = "+";
} else if (equation.includes("-")) {
    operator = "-";
} else if (equation.includes("/")) {
    operator = "/";
} else if (equation.includes("*")) {
    operator = "*";
} else {
    alert("Invalid equation. Please use +, -, /, * or x");
    continue; ///go back to the beginning of loop (start calculator again)
}


//if there's an operator continue with claculation
if (operator) {
    //split equation to get the numbers
    let parts = equation.split(operator);
    //converts parts from strings to numbers
    num1 = parseFloat(parts[0].trim());
    num2 = parseFloat(parts[1].trim());
}


//check number validity
if (isNaN(num1) || isNaN(num2)){
alert("There are invald numbers in your equation. Please try again");
} else{
    //do the calculation
    let result;
    if (operator === "+"){
        result = num1 + num2;
    } else if (operator === "-"){
        result = num1 - num2;
    } else if (operator === "*"){
        result = num1 * num2;
    } else if (operator === "/"){
        if ( num2 === 0){
            alert("You cannot divide by 0. Please enter another equation.");
            continue;
        } else {
            result = num1 / num2;
        }
    }

  //display the result
  if (result !== undefined) {
    alert(`The result of ${num1} ${operator} ${num2} is: ${result}`);
  }
}

//Ask user if they want to restar the calculator
runAgain = confirm("Do you want to insert another equation?");
}
alert("Thank you for using the calculator");
}

//Start Calc
runCalc();