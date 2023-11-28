//Inializing the variables
const userInput = document.querySelector("#userAge");
const calculateBtn = document.querySelector("#checkBtn");
const resultDiv = document.querySelector("#checkResult");
const clearBtn = document.querySelector("#resetValue");

//funcion for displaying result in the webPage
function printResult(text) {
  //check the given input
  if (text) {
    resultDiv.innerHTML = "<h3>" + text + "</h3>";
  }
}

//Calling the function when the check eligibility is clicked.
calculateBtn.addEventListener("click", function () {
  let result = "";

  const userAge = userInput.value;

  //check the input is given or not
  if (!userAge) {
    printResult("Please, Enter your age!");
    resultDiv.style.color = "grey";
    return;
  } else if (userAge < 18) {
    result = "Your are NOT eligible to vote";
    resultDiv.style.color = "red";
  } else if (userAge > 150) {
    result = "Enter the valid Age";
    resultDiv.style.color = "grey";
  } else {
    result = "Your are eligible to vote";
    resultDiv.style.color = "green";
  }
  printResult(result);
});

//function to reset the entered values
clearBtn.addEventListener("click", function () {
  userInput.value = "";
  printResult(" ");
});
