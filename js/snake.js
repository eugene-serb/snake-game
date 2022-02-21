/* ---------- */
/* SNAKE GAME */
/* ---------- */

const fieldWrapper = document.querySelector('.field-wrapper');
const scoreField = document.querySelector('.score');

let field = document.createElement('div');
fieldWrapper.appendChild(field);
field.classList.add('field');

let score = 0;
scoreField.innerText = `Your score: ${score}`;

/* ----- */
/* FIELD */
/* ----- */

for (let i = 1; i <= 100; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel')
};

let excel = document.getElementsByClassName('excel');

let x = 1,
    y = 10;

for (let i = 0; i < excel.length; i++) {

    if (x > 10) {
        x = 1;
        y--;
    };

    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);

    x++
};

/* ----- */
/* SNAKE */
/* ----- */

function generateSnake() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
};

let coordinates = generateSnake();

let snakeBody = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'),
    document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
};

snakeBody[0].classList.add('head');

/* ----- */
/* MOUSE */
/* ----- */

let mouse;

function createMouse() {

    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    };

    let mouseCoordinates = generateMouse();

    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

    while (mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }

    mouse.classList.add('mouse');
};

createMouse();

/* ---- */
/* MOVE */
/* ---- */

let direction = 'right';
let steps = false;

function move() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
    snakeBody.pop();

    /* -------- */
    /* ROTATING */
    /* -------- */

    if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        };
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + snakeCoordinates[1] + '"]'));
        };
    } else if (direction == 'up') {
        if (snakeCoordinates[1] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] + 1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
        };
    } else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1] - 1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
        };
    };

    /* ------------ */
    /* MOUSE EATING */
    /* ------------ */

    if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') &&
        snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {

        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        createMouse();
        score++;
        scoreField.innerText = `Your score: ${score}`;
    };

    /* ----------- */
    /* SNAKE DEATH */
    /* ----------- */

    if (snakeBody[0].classList.contains('snakeBody')) {
        
        setTimeout(() => {
            scoreField.innerText = `Game Over! Your score: ${score}`;
        }, 200);

        clearInterval(interval);
        snakeBody[0].classList.add('death');
    };

    /**/

    snakeBody[0].classList.add('head');

    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    };

    steps = true;
};

let interval = setInterval(move, 300);

window.addEventListener('keydown', function (e) {

    if (steps == true) {
        if (e.keyCode == 37 && direction != 'right') {
            direction = 'left';
            steps = false;
        } else if (e.keyCode == 38 && direction != 'down') {
            direction = 'up';
            steps = false;
        } else if (e.keyCode == 39 && direction != 'left') {
            direction = 'right';
            steps = false;
        } else if (e.keyCode == 40 && direction != 'up') {
            direction = 'down';
            steps = false;
        };
    };

});

