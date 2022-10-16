"use strict";

// 1.function
// function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello');
log(123);


// 2.parameters
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie); // {name: 'coder'}


// 3.denfault parameters (added in ES6)
// from 값 없음
// function showMessage(message, from) {
//     console.log(`${message} by ${from}`);
// }
// showMessage('Hi!'); // Hi! by undejfined

// from 값의 default 값을 입력해두기 (before ES6)
// function showMessage(message, from) {
//     if(from === undefined) {
//         from = 'unknown';
//     }
//     console.log(`${message} by ${from}`);
// }
// showMessage('Hi!'); // Hi! by unknown

// default parameter 
function showMessage(message, from = 'unknown') {
    if(from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi! by unknown


// 4.rest parameter (added in ES6)
// 변수 앞에 ... 추가하여 사용
function printAll(...args) {
    // for 사용
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    // 배열을 이용한 사용
    // for(const arg of args) {
    //     console.log(arg);
    // }

    // forEach
    // args.forEach((arg) => console.log(arg));
}
printAll('hello', 'bye', 'see you later');

// 5.local scope
// globlal scope
// local scope

// 6.return a value
// return이 없는 경우는 undefined 라고 보면 됨
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(` ${sum(1, 2)}`);

// 7.early return, early exit

// Q) user.point가 10 초과일 경우 업그레이드 진행(긴 로직일 경우)
// A) bad
function upgradeUser(user) {
    // 조건이 맞을 경우 먼저 업데이트를 진행
    if(user.point > 10) {
        // update logic
    }
}

// A) good - 조건이 아닐 경우 빨리 리턴하고 그 다음 업데이트를 진행
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // update logic
}



// 1.function expression
// anonymous function - 함수명 미지정일 경우
// named function - 함수명 지정일 경우
const print = function() {
    // anonymous function
    console.log('print');
}
print();
// 선언된 함수를 가져다가 할당하는 것도 가능하다
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4

// 2.callback function using function
// 다른 함수에 인수로 전달된 함수
// 외부 함수 내부에서 호출되어 일종의 루틴이나 작업을 완료합니다.
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes');
}
const printNo = function print() {
    console.log('no');
}
randomQuiz('love you', printYes, printNo); // yes
randomQuiz('wa', printYes, printNo); // no



// 1.arr function
// always anonymous

// const simplePrint = function() {
//     console.log('simple print');
// };
const simplePrint = () => console.log('simple print');
simplePrint();

const add0 = function(a, b) {
    // a + b; // undefined
    return a + b; // 값 출력
}
// arr function으로 간결하게 표현이 가능하다
const add1 = (a, b) => a + b; // 블럭이 없는 경우 return이 없어도 값을 리턴한다

// 만약 블럭이 필요하다면 return을 입력해야 에러가 나지 않는다
const add2 = (a, b) => {
    // ....
    return a + b;
};




// 그 외. IIFE(Immediately Invoked Function Expression) 즉시실행함수
(function hello() {
    console.log('IIFE')
})();



// quiz 계산기 만들기
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
const add = function(a, b) {
    return(a + b);
}
const substract = function(a, b) {
    return a - b;
}
const divide = function(a, b) {
    return a / b;
}
const multiply = function(a, b) {
    return a * b;
}
const remainder = function(a, b) {
    return a % b;
}

const calculate = (command, a, b) => {
    switch (command) {
        case 'add':
            add(a, b);
            break;
        case 'substract':
            substract(a, b);
            break;
        case 'divide': 
            divide(a, b);
            break;
        case 'multiply': 
            multiply(a, b);
            break;
        case 'remainder':
            remainder(a, b);
            break;
        default:
            throw Error('틀림!')
    }
}
calculate ('add', 3, 2);