function generateText() {
  const number = parseInt(document.getElementById("numberInput").value);
  const text = document.getElementById("textInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = ""; // Clear previous result

  if (isNaN(number) || number <= 0 || text.trim() === "") {
    resultDiv.innerHTML = "<p>Please enter a valid number (> 0) and some text.</p>";
    return;
  }

  for (let i = 0; i < number; i++) {
    const p = document.createElement("p");
    p.textContent = text;
    resultDiv.appendChild(p);
  }
}
