'use strict';

// 변수
const TARGET_SIZE = 80;
const TARGET_COUNT = 5;
const TRAP_COUNT = 5;
const TIME = 10;
const POPUP_TEXT_WIN = 'You Won';
const POPUP_TEXT_LOSE = 'You Lose';

const field = document.querySelector('.ground');
const fieldRect = field.getBoundingClientRect();
const startBtn = document.querySelector('.btn_start');
const restartBtn = document.querySelector('.btn_restart');
const stopBtn = document.querySelector('.btn_stop');
const timer = document.querySelector('.timer');
const score = document.querySelector('.num_count');
const popup = document.querySelector('.popup');

// game start
function startGame() {
    initGame();
    timeCountDown();
    showStopBtn();
    field.addEventListener('click', clickItem); // 게임 중에만 해당 이벤트 가능하도록!
}

// game stop
function stopGame() {
    initGame();
    stopTimeCountDown();
    showStartBtn();
}

// game lose
function loseGame() {
    stopTimeCountDown();
    showPopup(POPUP_TEXT_LOSE);
}

// game win
function winGame() {
    stopTimeCountDown()
    showPopup(POPUP_TEXT_WIN);
}

// init
function initGame() {
    if(field.firstChild) {
        while (field.firstChild) {
            field.removeChild(field.firstChild);
        }
    }

    addTarget('target', TARGET_COUNT);
    addTarget('trap', TRAP_COUNT);

    remainingScore = TARGET_COUNT;
    score.textContent = remainingScore;
    maxNum = TIME;
    timer.textContent = maxNum;
    
}
function addTarget(className, count) {
    const maxWidth = fieldRect.width - TARGET_SIZE;
    const maxHeight = fieldRect.height - TARGET_SIZE;

    for (let i = 0; i < count; i++) {
        const target = document.createElement('div');
        target.setAttribute('class', className);
        const randomX = getRandomArbitrary(0, maxWidth);
        const randomY = getRandomArbitrary(0, maxHeight);
        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
        field.appendChild(target);
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// count item
function clickItem(e) {
    if (e.target.classList.contains('target')) {
        e.target.remove();
        countScore();
    } else if (e.target.classList.contains('trap')) {
        loseGame();
    }
}
let remainingScore = TARGET_COUNT;
function countScore() {
    remainingScore--;
    score.textContent = remainingScore;
    console.log(remainingScore);
    if(remainingScore == 0) {
        winGame();
    }
}

// timer
let maxNum = TIME;
function countDown() {
    if (maxNum > 0) {
        maxNum--;
        timer.textContent = maxNum;
    } else {
        loseGame();
        stopTimeCountDown();
    }
}
let nIntervId;
function timeCountDown() {
    if(!nIntervId) {
        nIntervId = setInterval(countDown, 1000);
    }
}
function stopTimeCountDown() {
    clearInterval(nIntervId);
    nIntervId = null;
}

// btn controll
function showStopBtn() {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
}
function showStartBtn() {
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
}

// popup
function showPopup(popupText) {
    popup.classList.add('on');
    document.querySelector('.popup_text').textContent = `${popupText}`;
}
function hiddenPopup() {
    popup.classList.remove('on');
}

// add event
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', hiddenPopup);
stopBtn.addEventListener('click', stopGame);