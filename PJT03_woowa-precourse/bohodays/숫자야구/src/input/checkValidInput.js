function alertInvalidInput(error) {
  if (error === 'NaN') {
    alert('잘못된 입력입니다! 😅 숫자만 입력가능합니다!');
  } else if (error === 'duplicate') {
    alert('잘못된 입력입니다! 😅 중복된 숫자는 입력할 수 없습니다!');
  } else if (error === 'inValidScope') {
    alert('잘못된 입력입니다! 😅 1~9 사이의 숫자만 입력할 수 있습니다!');
  } else if (error === 'Null') {
    alert('잘못된 입력입니다! 😅 1~9 사이의 숫자를 입력해주세요!')
  }
  return false;
}


function checkNumber(userInputNumbers) {
  for (let i = 0; i < userInputNumbers.length; i++) {
    if (String(userInputNumbers[i]).length === 3) {
      return false;
    }
  }
  return true;
};


function checkDuplicate(userInputNumbers) {
  if (userInputNumbers.length === [...new Set(userInputNumbers)].length) {
    return true;
  }
  return false;
};


function checkScope(userInputNumbers) {
  for (let i = 0; i < userInputNumbers.length; i++) {
    if (!userInputNumbers[i]) {
      return false;
    }
  }
  return true; 
};

function checkNull(userInputNumbers) {
  const total = userInputNumbers.reduce((total, number) => total + number) 
  if (total === 0) {
    return false;
  }
  return true;
};


export default function checkValidInput(userInputNumbers) {
  if (!checkNumber(userInputNumbers)) {
    return alertInvalidInput('NaN');
  }
  if (!checkNull(userInputNumbers)) {
    return alertInvalidInput('Null');
  }
  if (!checkDuplicate(userInputNumbers)) {
    return alertInvalidInput('duplicate');
  }
  if (!checkScope(userInputNumbers)) {
    return alertInvalidInput('inValidScope');
  }
  return true;
};



