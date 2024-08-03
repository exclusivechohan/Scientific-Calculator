var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var themeToggle = document.querySelector('#themeToggle');
var body = document.querySelector('body');

// Ensure dark mode is the default and update button text
if (body.classList.contains('dark')) {
    themeToggle.textContent = 'Light Mode'; // Button indicates it can switch to light mode
} else {
    themeToggle.textContent = 'Dark Mode'; // Button indicates it can switch to dark mode
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    // Update button text based on the current state
    if (body.classList.contains('dark')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// Add event listeners for number and operator buttons
for (let item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext === '×') {
            btntext = '*';
        } else if (btntext === '÷') {
            btntext = '/';
        }

        screen.value += btntext;
    });
}

function evaluateExpression() {
    try {
        let expression = screen.value;
        if (isValidExpression(expression)) {
            screen.value = eval(expression);
        } else {
            screen.value = "Error";
        }
    } catch (e) {
        screen.value = "Error";
    }
}

function isValidExpression(expression) {
    if (expression.trim() === "") return false;
    if (/[\+\-\*\/]{2,}/.test(expression)) return false;

    let stack = [];
    for (let char of expression) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    if (stack.length !== 0) return false;
    if (/[+\-*\/]$/.test(expression)) return false;

    return true;
}

document.querySelector('#eval').addEventListener('click', evaluateExpression);

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}