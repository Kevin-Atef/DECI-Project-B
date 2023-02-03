let state = document.getElementsByClassName("status")[0];

let expression = document.getElementsByClassName("expression")[0];

let input = document.getElementsByClassName("input")[0];

let buttons = Array.from(document.getElementsByClassName("button"));

let themes = Array.from(document.getElementsByClassName("theme"));
themes.push(document.getElementsByClassName("theme-default")[0]);
let navThemes = Array.from(document.getElementsByClassName("nav-themes"));

let submit = document.getElementsByClassName("submit")[0];

let userName = document.getElementsByClassName("name")[0];
let age = document.getElementsByClassName("age")[0];

let correct = document.getElementById("correct");
let correctNum = 0;
correct.innerText = `Correct: ${correctNum}`;

let wrong = document.getElementById("wrong");
let wrongNum = 0;
wrong.innerText = `Wrong: ${wrongNum}`;

state.innerText = `Hi!`;

let style = document.getElementById("stylesheet");

function login() {
    document.getElementById("main").style.display = "none";
    document.getElementsByClassName("login-aside")[0].style.display = "grid";
}

function isLogical() {
    return expression.innerText.includes('>') || expression.innerText.includes('<')
}

function reset(stateReset) {
    if (stateReset == true) {
        state.innerText = "";
    }
    expression.innerText = "";
    input.disabled = false;
    input.value = "";
    input.placeholder = "Your Answer...";
}

function evaluate(logical) {
    try {
        let exp = eval(expression.innerText);
        if (logical) {
            ans = true;
        }
        else {
            ans = input.value;
        }
        if (exp == ans) {
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
    reset(false);
}

buttons.map(button => {
    button.addEventListener("click", (e) => {
        let buttonName = e.target.innerText;
        switch (buttonName) {

            case "C":
                reset(true);
                break;

            case "DEL":
                expression.innerText = expression.innerText.slice(0, -1);
                if (!isLogical()) {
                    input.disabled = false;
                    input.placeholder = "Your Answer...";
                }
                state.innerText = "";
                break;

            case "SUBMIT":
                if (isLogical()) {
                    evaluate(true);
                }
                else if (input.value.length == 0) {
                    state.id = "";
                    state.innerText = "Input Answer!";
                }
                else if (expression.innerText.length != 0) {
                    evaluate(false);
                }
                break;

            case "<": case ">":
                input.disabled = true;
                input.placeholder = "Disabled.";
                expression.innerText += buttonName;
                break;

            default:
                state.innerText = "";
                if (expression.innerText.length < 21) {
                    expression.innerText += buttonName;
                }
                else {
                    state.innerText = "Maximum Characters";
                }
                break;
        }
    });
});

themes.map(theme => {
    theme.addEventListener("click", (e) => {
        document.getElementsByClassName("theme-default")[0].className = "theme";
        e.target.className = "theme-default";
        switch(e.target.innerText) {
            case "Default":
                style.href = "assets/css/default.css";
                break;
            case "Space":
                style.href = "assets/css/space.css";
                break;
            case "Colorful":
                style.href = "assets/css/colorful.css";
                break;
            case "Marvel":
                style.href = "assets/css/marvel.css";
                break;
            default:
                break;
        }
    });
});
navThemes.map(navTheme => {
    navTheme.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "Default":
                document.getElementById("default").click();
                break;
            case "Space":
                document.getElementById("space").click();
                break;
            case "Colorful":
                document.getElementById("colorful").click();
                break;
            case "Marvel":
                document.getElementById("marvel").click();
                break;
            default:
                break;
        }
    });
});

submit.addEventListener("click", (e) => {
    if (userName.value != "" && age.value != "") {
        document.getElementsByClassName("login-aside")[0].style.display = "none";
        document.getElementById("main").style.display = "grid";
    }
    correctNum = 0;
    wrongNum = 0;
    expression.innerText = "";
    state.innerText = "";
    state.innerText = `Hi, ${userName.value}!`;
});