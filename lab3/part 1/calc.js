var firstNumber = Number(prompt("Enter the first number"));
      
var operator = prompt("Enter operation sum,multiply,subtract,division,modulus")
var secondNumber = Number(prompt("Enter the second number"));

switch(operator)
{
 case "sum":
     alert("sum =   " + (firstNumber+secondNumber));
     break;
 case "multiply":
     alert("multiplaction =   " + (firstNumber*secondNumber));
     break;
 
 case "subtract":
 alert("subtraction =   " + (firstNumber-secondNumber));
     break;
 
 case "division":
     alert("division =   " + (firstNumber/secondNumber));
     break;

 case "modulus":
     alert("modulus =   " + (firstNumber%secondNumber));
     break;
     
 default :
     alert("Wrong operation syntax");
     break;

 }
