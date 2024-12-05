let resultDisplay = document.getElementById("result");

function appendToDisplay(value) {
  if (resultDisplay.innerText === "0") {
    resultDisplay.innerText = value;
  } else {
    resultDisplay.innerText += value;
  }
  animateResult();
}

function clearDisplay() {
  resultDisplay.innerText = "0";
  animateResult();
}

function deleteDigit() {
  resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
  if (resultDisplay.innerText === "") {
    resultDisplay.innerText = "0";
  }
  animateResult();
}

function calculateResult() {
  try {
    resultDisplay.innerText = eval(resultDisplay.innerText);
  } catch {
    resultDisplay.innerText = "Error";
  }
  animateResult();
}

function animateResult() {
  gsap.fromTo(
    "#result",
    { scale: 1.1, opacity: 0.8 },
    { scale: 1, opacity: 1, duration: 0.3 }
  );
}

function animateButton(button) {
  gsap.to(button, { scale: 0.6, duration: 0.1 });
  gsap.to(button, { scale: 1, duration: 0.2, delay: 0.1 });
}

window.onload = function () {
  gsap.from(".content-container", {
    opacity: 0,
    y: 80,
    duration: 2,
    ease: "power3.out",
    stagger: {
      amount: 0.7,
    },
  });
};