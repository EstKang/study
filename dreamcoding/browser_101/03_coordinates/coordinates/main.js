'use strict';

const target = document.querySelector('.target');
const targetCoord = document.querySelector('.target_coord');
const lineV = document.querySelector('.line_v');
const lineH = document.querySelector('.line_h');
document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    targetCoord.innerHTML = `${x}, ${y}`;

    target.style.transform = `translate(${x - (target.clientWidth / 2)}px, ${y - (target.clientWidth / 2)}px)`;
    lineH.style.transform = `translateY(${y}px)`;
    lineV.style.transform = `translateX(${x}px)`;

    // position으로 지정 시 레이아웃 재배치가 일어나기 때문에 퍼포먼스 효율이 떨어진다
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // lineH.style.top = `${y}px`;
    // lineV.style.left = `${x}px`;
    
});