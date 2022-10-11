const numberBtn = document.querySelectorAll('.number');
numberBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const target = event.target
    // 선택된 버튼의 개수 확인
    const selectedCnt = document.getElementsByClassName('select').length;
    // 이미 선택된 버튼이 있다면
    if (selectedCnt === 1) {
      // 선택된 버튼을 변수로 지정
      const selectedBtn = document.querySelector('.select');
      // 선택된 버튼의 클래스 제거
      selectedBtn.classList.remove('select');
      // 클릭한 타겟에 클래스 추가
      target.classList.add('select');
    // 선택된 버튼이 없다면
    } else {
      // 클릭한 타겟에 클래스 추가
      target.classList.add('select');
    }})
  });

const component = document.querySelector('.component');
const component__survey = document.querySelector('.component__survey');
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', () => {
  const SelecedNumber = document.querySelector('.select')
  component.removeChild(component__survey);
  createResult(SelecedNumber.dataset.value);
})

function createResult(selectedNumber) {
  const componentResult = document.createElement('div');
  componentResult.setAttribute('class', 'component__result');
  component.appendChild(componentResult);

  const thankYouImgBox = document.createElement('div');
  thankYouImgBox.setAttribute('class', 'thank-you');
  componentResult.appendChild(thankYouImgBox);
  
  const thankYouImg = document.createElement('img');
  thankYouImg.setAttribute('src', 'images/illustration-thank-you.svg');
  thankYouImg.setAttribute('alt', 'thank-you');
  thankYouImgBox.appendChild(thankYouImg);
  
  const selectedBox = document.createElement('div');
  selectedBox.setAttribute('class', 'selectedNumber');
  componentResult.appendChild(selectedBox);
  
  const selectedDescription = document.createElement('span');
  selectedDescription.setAttribute('class', 'selectedNumber__description');
  selectedDescription.innerText = `You selected ${selectedNumber} out of 5`;
  selectedBox.appendChild(selectedDescription);
  
  const thankYouBox = document.createElement('div');
  thankYouBox.setAttribute('class', 'thank-you__description');
  componentResult.appendChild(thankYouBox);
  
  const thankYouTitle = document.createElement('h1');
  thankYouTitle.setAttribute('class', 'thank-you__title');
  thankYouTitle.innerText = 'Thank you!';
  thankYouBox.appendChild(thankYouTitle);
  
  const thankYouContent = document.createElement('p');
  thankYouContent.setAttribute('class', 'thank-you__content');
  if (screen.width < 375) {
    thankYouContent.innerText = `We appreciate you taking the time to give a
    rating. If you ever need more support, don’t 
    hesitate to get in touch!`
  } else {
    thankYouContent.innerText = `We appreciate you taking the time to give a rating.
    If you ever need more support, don’t hesitate to
    get in touch!`
  }
  thankYouBox.appendChild(thankYouContent);
};

