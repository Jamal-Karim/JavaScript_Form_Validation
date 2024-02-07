const email = document.getElementById('email');
const errorMessage = document.querySelector('.error');


email.addEventListener('input', () => {

    if(email.validity.typeMismatch){
        errorMessage.innerHTML = 'not valid email';
        email.setCustomValidity('give me real email');
    } else {
        email.setCustomValidity('');
        errorMessage.innerHTML = '';
    }        
    
    console.log(email.validity.typeMismatch);
})