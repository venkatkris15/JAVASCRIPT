function calculate() {
    var input = document.getElementById("input").value;
    var result = document.getElementById("result");
  
    // Check if the input is empty
    if (input === "") {
      result.innerHTML = "Please enter an expression";
      return;
    }
  
    // Splitting the input into operands and operator
    var operands = input.split(/[+\-*/]/);
    var operator = input.match(/[+\-*/]/);
  
    // Checking if the input is valid
    if (operands.length !== 2 || !operator) {
      result.innerHTML = "Invalid input";
      return;
    }
  
    // Parsing operands to numbers
    var operand1 = parseFloat(operands[0]);
    var operand2 = parseFloat(operands[1]);
  
    // Performing calculation based on the operator
    switch (operator[0]) {
      case '+':
        result.innerHTML = operand1 + operand2;
        break;
      case '-':
        result.innerHTML = operand1 - operand2;
        break;
      case '*':
        result.innerHTML = operand1 * operand2;
        break;
      case '/':
        if (operand2 === 0) {
          result.innerHTML = "Division by zero";
        } else {
          result.innerHTML = operand1 / operand2;
        }
        break;
      default:
        result.innerHTML = "Invalid operator";
    }
  }
  