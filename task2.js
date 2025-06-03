function checkGrade() {
  const score = parseFloat(document.getElementById("scoreInput").value);
  let result = "";

  if (isNaN(score) || score < 0 || score > 100) {
    result = "Please enter a valid score between 0 and 100.";
  } else {
    if (score >= 90) {
      result = "Grade: A";
    } else if (score >= 80) {
      result = "Grade: B";
    } else if (score >= 70) {
      result = "Grade: C";
    } else if (score >= 60) {
      result = "Grade: D";
    } else {
      result = "Grade: F";
    }
  }

  document.getElementById("result").innerText = result;
}
