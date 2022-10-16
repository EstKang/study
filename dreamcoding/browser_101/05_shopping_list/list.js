'use strict';

const shopListWrap = document.querySelector('.shop_list_wrap');
const inputAddList = document.querySelector('.input_add_list');
const btnAddList = document.querySelector('.btn_add_list');

// 별을 붙인 주석은 강의를 보면서 추가가 필요하다 생각되는 부분을 추가해보았음

// 리스트 추가
let id = 0;
const addList = () => {
    // * 함수 미실행 조건 추가 - 입력된 텍스트가 없을 시 함수를 빠져나간다
    const inputText = inputAddList.value;
    if(inputText === '') {
        inputAddList.focus()
        return;
    }

    // li를 shopListWrap 아래에 생성한다
    const li = shopListWrap.appendChild(document.createElement('li'));
    // li에 shop_list 클래스를 부여한다
    li.setAttribute('class', 'shop_list');
    li.setAttribute('data-id', id);
    // li의 innerText를 추가한다
    li.innerHTML = `
        ${inputAddList.value}
        <button type="button" class="btn_delete_list"><span class="blind">삭제</span></button>
    `;
    id++;

    // * 리스트가 영역 밖으로 늘어났을 경우 스크롤이 맨 아래로
    // 생각했던 코드
    // const listScrollWrap = document.querySelector('.section_list');
    // listScrollWrap.scrollTop = listScrollWrap.scrollHeight;
    // * 강의에서 나온 코드. 이게 더 간단해보인다.
    li.scrollIntoView({block: 'center'});

    // inputAddList.value 값 초기화
    inputAddList.value = '';
    // * 포커스 추가(버튼을 클릭해서 리스트를 추가했을 경우에 대한 동작 추가)
    inputAddList.focus()
}

// 리스트 삭제
const removeList = (e) => {
    if(e.target.classList.contains('btn_delete_list') === true) { // 타겟이 btn_delete_list일 때 실행
        let removeElement = e.target.parentNode;
        removeElement.remove(); // 부모노드 삭제처리
    }
}


btnAddList.addEventListener('click', addList); // 클릭 시 리스트 추가
inputAddList.addEventListener('keydown', (e) => {
    if(`${e.key}` == 'Enter'){ // 엔터 입력 시 리스트 추가
        if(e.isComposing) {
            return;
        }
        addList();
    }
});
shopListWrap.addEventListener('click', removeList); // 리스트 삭제