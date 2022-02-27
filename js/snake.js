/* ---------- */
/* SNAKE GAME */
/* ---------- */

/* ---------- */
/* RANDOMIZER */
/* ---------- */

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

/* ----- */
/* SCORE */
/* ----- */

class Score {

    constructor(banner) {
        this.banner = banner;
        this.score = 0;

        this.draw();
    };

    increase = () => {
        this.score++;
        this.draw();
    };

    draw = () => {
        this.banner.innerText = `Your Score: ${this.score}`;
    };

    end = () => {
        this.banner.innerText = `Game Over! Your Score: ${this.score}`;
    };
};

/* ----- */
/* FIELD */
/* ----- */

class Field {

    constructor(container) {
        this.container = container;

        this.draw();
    };

    draw = () => {
        this.container.innerHTML = '';

        let field = document.createElement('div');
        field.classList.add('field');

        this.container.appendChild(field);

        for (let y = 10; y >= 1; y--) {
            for (let x = 1; x <= 10; x++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('x', x);
                cell.setAttribute('y', y);
                field.appendChild(cell);
            };
        };
    };
};

/* ----- */
/* SNAKE */
/* ----- */

class Snake {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.dx = 1;
        this.dy = 0;
        this.direction = 'right';
        this.steps = false;
        this.tails = [];
        this.maxTails = 3;

        this.generate();
        this.draw();
    };

    generate = () => {
        this.x = getRandomInteger(3, 10);
        this.y = getRandomInteger(1, 10);
        this.tails = [{ x: this.x, y: this.y }, { x: this.x - 1, y: this.y }, { x: this.x - 2, y: this.y }];
    };

    draw = () => {
        this.tails.forEach((item, index) => {
            if (index === 0) {
                document.querySelector(`[x = "${item.x}"][y = "${item.y}"]`).classList.add('snakeHead');
            } else {
                document.querySelector(`[x = "${item.x}"][y = "${item.y}"]`).classList.add('snakeTail');
            };
        });
    };

    _collisionBorder = () => {
        if (this.x > 10) {
            this.x = 1;
        } else if (this.x < 1) {
            this.x = 10;
        };

        if (this.y > 10) {
            this.y = 1;
        } else if (this.y < 1) {
            this.y = 10
        };
    };

    update = (field, score, food, interval) => {

        this.x += this.dx;
        this.y += this.dy;

        this._collisionBorder();

        this.tails.unshift({ x: this.x, y: this.y });

        if (this.tails.length > this.maxTails) {
            this.tails.pop();
        };

        field.draw();
        this.draw();

        if (this.x === food.x && this.y === food.y) {
            this.maxTails++;
            score.increase();

            field.draw();
            this.draw();
            food.generate();
            food.draw();
        };

        if (document.querySelector('.snakeHead').classList.contains('snakeTail')) {
            score.end();
            clearInterval(interval);
        };

        this.steps = true;
    };
};

/* ---- */
/* FOOD */
/* ---- */

class Food {

    constructor() {
        this.x = 0;
        this.y = 0;

        this.generate();
        this.draw();
    };

    generate = () => {
        let allCells = document.querySelectorAll('.cell');
        let emptyCell = [];

        allCells.forEach((item) => {
            if (!item.classList.contains('snakeTail') && !item.classList.contains('snakeHead') && !item.classList.contains('food')) {
                emptyCell.push(item);
            };
        });

        let rnd = getRandomInteger(1, emptyCell.length);

        this.x = +emptyCell[rnd].getAttribute('x');
        this.y = +emptyCell[rnd].getAttribute('y');
    };

    draw = () => {
        document.querySelector(`[x = "${this.x}"][y = "${this.y}"]`).classList.add('food');
    };
};

/* ---- */
/* GAME */
/* ---- */

class Game {

    constructor(container, banner) {
        this.container = container;
        this.banner = banner;

        this.start();
    };

    start = () => {
        this.field = new Field(this.container);
        this.score = new Score(this.banner);
        this.snake = new Snake();
        this.food = new Food();

        this._controls();
        this.interval = setInterval(this._animate, 250);
    };

    _animate = () => {
        this._update();
        this._draw();
    };

    _update = () => {
        this.snake.update(this.field, this.score, this.food, this.interval);
    };

    _draw = () => {
        this.field.draw();
        this.snake.draw();
        this.food.draw();
    };

    _controls = () => {

        window.addEventListener('keydown', (e) => {

            if (this.snake.steps === true) {
                if ((e.code === 'ArrowLeft' || e.code === "KeyA") && this.snake.direction !== 'right') {
                    this.snake.dx = -1;
                    this.snake.dy = 0;
                    this.snake.direction = 'left';
                    this.snake.steps = false;
                } else if ((e.code === 'ArrowUp' || e.code === "KeyW") && this.snake.direction !== 'down') {
                    this.snake.dx = 0;
                    this.snake.dy = 1;
                    this.snake.direction = 'up';
                    this.snake.steps = false;
                } else if ((e.code === 'ArrowRight' || e.code === "KeyD") && this.snake.direction !== 'left') {
                    this.snake.dx = 1;
                    this.snake.dy = 0;
                    this.snake.direction = 'right';
                    this.snake.steps = false;
                } else if ((e.code === 'ArrowDown' || e.code === "KeyS") && this.snake.direction !== 'up') {
                    this.snake.dx = 0;
                    this.snake.dy = -1;
                    this.snake.direction = 'down';
                    this.snake.steps = false;
                };
            };

            if (e.code === 'KeyR') {
                clearInterval(this.interval);
                this.start();
            };
        });
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const CONTAINER = document.querySelector('.snake-game__field-wrapper');
const BANNER = document.querySelector('.snake-game__score-banner');

const GAME = new Game(CONTAINER, BANNER);

