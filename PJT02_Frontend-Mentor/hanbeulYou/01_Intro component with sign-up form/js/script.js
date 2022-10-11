const firstNameForm = document.getElementById('firstName');
const lastNameForm = document.getElementById('lastName');
const emailForm = document.getElementById('email');
const passwordForm = document.getElementById('password');
const submitBtn = document.getElementById('submitForm');

submitBtn.addEventListener('click', checkValidAll);

function checkEmpty(element){
    const idName = 'Invalid' + element.id;
    const invalidId = document.getElementById(idName);
    const invalidSpan = document.getElementById(idName + 'Span');

    if(element.value === ''){
        invalidId.classList.remove('hidden');
        invalidId.style.cssText = 'display:flex; justify-content:flex-end';
        
        invalidSpan.classList.remove('hidden');
        invalidSpan.innerText = `${element.placeholder} cannot be empty`;
        invalidSpan.style.cssText = 'color: var(--color-red)';
        element.classList.add('invalidForm');
        return false;
    } else {
        invalidId.classList.add('hidden');
        invalidSpan.classList.add('hidden');
        element.classList.remove('invalidForm');
        return true;
    }
}

function checkEmail(event){
}

function checkValidAll(event){
    console.log('BUTTON CLICKED!')
    checkEmpty(firstNameForm);
    checkEmpty(lastNameForm);
    checkEmpty(emailForm);
    checkEmpty(passwordForm);
}

submitBtn.addEventListener('submit', checkValidAll)