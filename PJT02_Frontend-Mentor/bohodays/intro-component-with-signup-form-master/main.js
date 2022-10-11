const submitBtn = document.querySelector('.submit');
const checkEmptyInputs = document.querySelectorAll('.content__input');
submitBtn.addEventListener('click', () => {
  // 모든 input을 순회
  checkEmptyInputs.forEach(input => {
    const parent = input.parentNode
    const ErrorMessage = parent.lastChild
    // 만약 input의 값이 비어있고, email input이 아니라면
    if (input.value === '' && !input.classList.contains('email-address')) {
      // 에러 메시지 생성
      createMessage(input);
    // 만약 email input이라면
    } else if (input.classList.contains('email-address')) {
      // input의 값이 비어있지 않고, '@'나 '.'을 포함하고 있지 않다면
      if (input.value !== '' && (!input.value.includes('@') || !input.value.includes('.'))) {
        // 에러 메시지 생성
        createMessageEmail(input);
      // input의 값이 비어있지 않고, '@'나 '.'을 포함하고
      } else if (input.value !== '' && input.value.includes('@') && input.value.includes('.')) {
        // input의 부모노드의 자식 개수가 3개라면 (에러메시지가 이미 존재한다면) 에러메시지를 제거하고 원래 input 스타일로 되돌리기
        if (parent.childElementCount === 3) {
          parent.removeChild(ErrorMessage);
          input.style.border = `1px solid var(--color-grayish-blue)`;
          input.nextElementSibling.classList.add('visible');
        }
      }
    // 만약 email input이 아니면서 값이 비어있지 않다면
    } else if (input.value !== '') {
      // input의 부모노드의 자식 개수가 3개라면 (에러메시지가 이미 존재한다면) 에러메시지를 제거하고 원래 input 스타일로 되돌리기
      if (parent.childElementCount === 3) {
        parent.removeChild(ErrorMessage);
        input.style.border = `1px solid var(--color-grayish-blue)`;
        input.nextElementSibling.classList.add('visible');
      }
    }
  })
});


// email input을 제외한 나머지 input에 에러 메시지 및 이미지를 생성하고, border를 바꾸는 함수
function createMessage(input) {
  const targetContentBox = input.parentNode
  if (targetContentBox.childElementCount === 3) {
    return;
  } else {
    const ErrorMessage = document.createElement('p');
    ErrorMessage.setAttribute('class', 'error__message')
    ErrorMessage.innerText = `${input.dataset.value} cannot be empty`;
    targetContentBox.appendChild(ErrorMessage);
    input.nextElementSibling.classList.remove('visible');
    input.style.border = `2px solid hsl(0, 100%, 74%)`
  }
};

// email input에 에러 메시지 및 이미지를 생성하고, border를 바꾸는 함수
function createMessageEmail(input) {
  const targetContentBox = input.parentNode
  if (targetContentBox.childElementCount === 3) {
    return;
  } else {
    const ErrorMessage = document.createElement('p');
    ErrorMessage.setAttribute('class', 'error__message')
    ErrorMessage.innerText = 'Looks like this is not an email';
    targetContentBox.appendChild(ErrorMessage);
    input.nextElementSibling.classList.remove('visible');
    input.style.border = `2px solid hsl(0, 100%, 74%)`
  }
}