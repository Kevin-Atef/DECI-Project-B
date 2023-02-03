let state = document.getElementById("status");

let expression = document.getElementById("expression")

let input = document.getElementById("input");

let buttons = Array.from(document.getElementsByClassName("button"));

let userName = "Kevin";

let correct = document.getElementById("correct");
let correctNum = 0;
correct.innerText = `Correct: ${correctNum}`;

let wrong = document.getElementById("wrong");
let wrongNum = 0;
wrong.innerText = `Wrong: ${wrongNum}`;

state.innerText = `Hi, ${userName}!`;

function login() {
    document.getElementById("main").style.display = "none";
    document.getElementById("login").style.display = "grid";
}
buttons.map(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "C") {
            expression.innerText = "";
            state.innerText = "";
        }
        else if (e.target.innerText == "DEL") {
            expression.innerText = expression.innerText.slice(0, -1);
            if (!(expression.innerText.includes('>') || expression.innerText.includes('<'))) {
                input.disabled = false;
                input.placeholder = "Your Answer...";
            }
            state.innerText = "";
        }
        else if (e.target.innerText == "SUBMIT") {
            if (expression.innerText.includes('>') || expression.innerText.includes('<')) {
                try {
                    let ans = eval(expression.innerText);
                    if (ans == true) {
                        state.style.color = "#00ab41";
                        state.innerText = "Great Job!";
                        correctNum++;
                        correct.innerText = `Correct: ${correctNum}`;
                    }
                    else {
                        state.style.color = "#d0312d";
                        state.innerText = "Try Again!";
                        wrongNum++;
                        wrong.innerText = `Wrong: ${wrongNum}`;
                    }
                    expression.innerText = "";
                }
                catch {
                    state.style.color = "white";
                    state.innerText = "Error!";
                }
                expression.innerText = "";
                input.disabled = false;
                input.value = "";
                input.placeholder = "Your Answer...";
            }
            else if (input.value.length == 0) {
                state.style.color = "white";
                state.innerText = "Input Answer!";
            }
            else if (expression.innerText.length != 0) {
                try {
                    let ans = eval(expression.innerText);
                    if (ans == input.value) {
                        state.style.color = "#00ab41";
                        state.innerText = "Great Job!";
                        correctNum++;
                        correct.innerText = `Correct: ${correctNum}`;
                    }
                    else {
                        state.style.color = "#d0312d";
                        state.innerText = "Try Again!";
                        wrongNum++;
                        wrong.innerText = `Wrong: ${wrongNum}`;
                    }
                }
                catch {
                    state.style.color = "white";
                    state.innerText = "Error!";
                }
                expression.innerText = "";
                input.disabled = false;
                input.value = "";
                input.placeholder = "Your Answer...";
            }

        }
        else if (e.target.innerText == "<" || e.target.innerText == ">") {
            input.disabled = true;
            input.placeholder = "Disabled.";
            expression.innerText += e.target.innerText;
        }
        else {
            state.innerText = "";
            if (expression.innerText.length < 21) {
                expression.innerText += e.target.innerText;
            }
            else {
                state.innerText = "Maximum Characters";
            }
        }
    });
});