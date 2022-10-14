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

    console.log('Check Empty');

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

function checkEmail(element){
    const idName = 'Invalid' + element.id;
    const invalidId = document.getElementById(idName);
    const invalidSpan = document.getElementById(idName + 'Span');
    let emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const elementValue = element.value

    console.log('Check Email');
    console.log(emailForm.test(elementValue));
    if(emailForm.test(elementValue) === true){
        invalidId.classList.add('hidden');
        invalidSpan.classList.add('hidden');
        element.classList.remove('invalidForm');
        return true;

    } else {
        invalidId.classList.remove('hidden');
        invalidId.style.cssText = 'display:flex; justify-content:flex-end';
        
        invalidSpan.classList.remove('hidden');
        invalidSpan.innerText = 'Looks like this is not an email';
        invalidSpan.style.cssText = 'color: var(--color-red)';
        element.classList.add('invalidForm');
        return false;
    }
}

function checkValidAll(event){
    console.log('BUTTON CLICKED!')
    checkEmpty(firstNameForm);
    checkEmpty(lastNameForm);
    // checkEmpty(emailForm);
    checkEmail(emailForm);
    checkEmpty(passwordForm);
}

submitBtn.addEventListener('submit', checkValidAll)
