let box = document.getElementsByClassName("box");
let result = document.getElementById("result");
let messsage = document.getElementById("message");
let playAgainBtn = document.getElementById("button");
let text;
let count = 0;
let flag = false;

function handleClick(elem) {
  if (!elem.target.innerHTML) {
    text = text == "O" ? "X" : "O";
    elem.target.innerHTML = `<h2>${text}</h2>`;
    count++;
    checkResult();
  }
  if (count === 9 && flag === false) showResult("DRAW");
}

function showResult(status) {
  result.style.visibility = "visible";
  messsage.innerText = status;
}

function checkResult() {
  if (
    box[0].innerText + box[1].innerText + box[2].innerText == "XXX" ||
    box[3].innerText + box[4].innerText + box[5].innerText == "XXX" ||
    box[6].innerText + box[7].innerText + box[8].innerText == "XXX" ||
    box[0].innerText + box[3].innerText + box[6].innerText == "XXX" ||
    box[1].innerText + box[4].innerText + box[7].innerText == "XXX" ||
    box[2].innerText + box[5].innerText + box[8].innerText == "XXX" ||
    box[0].innerText + box[4].innerText + box[8].innerText == "XXX" ||
    box[2].innerText + box[4].innerText + box[6].innerText == "XXX"
  ) {
    flag = true;
    showResult("X WON");
  } else if (
    box[0].innerText + box[1].innerText + box[2].innerText == "OOO" ||
    box[3].innerText + box[4].innerText + box[5].innerText == "OOO" ||
    box[6].innerText + box[7].innerText + box[8].innerText == "OOO" ||
    box[0].innerText + box[3].innerText + box[6].innerText == "OOO" ||
    box[1].innerText + box[4].innerText + box[7].innerText == "OOO" ||
    box[2].innerText + box[5].innerText + box[8].innerText == "OOO" ||
    box[0].innerText + box[4].innerText + box[8].innerText == "OOO" ||
    box[2].innerText + box[4].innerText + box[6].innerText == "OOO"
  ) {
    flag = true;
    showResult("O WON");
  }
}

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", handleClick);
}

playAgainBtn.addEventListener("click", () => {
  location.reload();
});