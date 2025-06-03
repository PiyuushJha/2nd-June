function checkNumber() {
  const num = parseFloat(document.getElementById("numberInput").value);
  let result = "";

  if (isNaN(num)) {
    result = "Please enter a valid number.";
  } else {
    // Check if number is positive, negative, or zero
    if (num > 0) {
      result += "The number is positive. ";
    } else if (num < 0) {
      result += "The number is negative. ";
    } else {
      result += "The number is zero. ";
    }

    // Check if number is even or odd (only if integer)
    if (Number.isInteger(num)) {
      result += (num % 2 === 0) ? "It is even." : "It is odd.";
    } else {
      result += "It is not an integer, so even/odd check doesn't apply.";
    }
  }

  document.getElementById("result").innerText = result;
}
