let state = document.getElementsByClassName("status")[0];

let expression = document.getElementById("expression")

let input = document.getElementById("input");

let buttons = Array.from(document.getElementsByClassName("button"));

let themes = Array.from(document.getElementsByClassName("theme"))

let submit = document.getElementById("submit");

let userName = document.getElementById("name");
let age = document.getElementById("age");

let correct = document.getElementById("correct");
let correctNum = 0;
correct.innerText = `Correct: ${correctNum}`;

let wrong = document.getElementById("wrong");
let wrongNum = 0;
wrong.innerText = `Wrong: ${wrongNum}`;

state.innerText = `Hi!`;

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
                        state.id = "status-correct";
                        state.innerText = "Great Job!";
                        correctNum++;
                        correct.innerText = `Correct: ${correctNum}`;
                    }
                    else {
                        state.id = "status-wrong";
                        state.innerText = "Try Again!";
                        wrongNum++;
                        wrong.innerText = `Wrong: ${wrongNum}`;
                    }
                    expression.innerText = "";
                }
                catch {
                    state.id = "";
                    state.innerText = "Error!";
                }
                expression.innerText = "";
                input.disabled = false;
                input.value = "";
                input.placeholder = "Your Answer...";
            }
            else if (input.value.length == 0) {
                state.id = "";
                state.innerText = "Input Answer!";
            }
            else if (expression.innerText.length != 0) {
                try {
                    let ans = eval(expression.innerText);
                    if (ans == input.value) {
                        state.id = "status-correct";
                        state.innerText = "Great Job!";
                        correctNum++;
                        correct.innerText = `Correct: ${correctNum}`;
                    }
                    else {
                        state.id = "status-wrong";
                        state.innerText = "Try Again!";
                        wrongNum++;
                        wrong.innerText = `Wrong: ${wrongNum}`;
                    }
                }
                catch {
                    state.id = "";
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

themes.map(theme => {
    theme.addEventListener("click", (e) => {
        document.getElementById("default").id = "";
        e.target.id = "default";
    });
});
submit.addEventListener("click", (e) => {
    if(userName.value != "" && age.value != "") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "grid";
    }
    correctNum = 0;
    wrongNum = 0;
    expression.innerText = "";
    state.innerText = "";
    state.innerText = `Hi, ${userName.value}!`;
});