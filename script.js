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

const country = document.getElementById('country');

// country.addEventListener('input', () => {
//     const countryValue = country.value.trim();
//     const lettersRegex = /^[A-Za-z]+$/;

//     if (!lettersRegex.test(countryValue)) {
//         errorMessage.innerHTML = 'Please enter only letters';
//     } else {
//         errorMessage.innerHTML = '';
//     }
// });

const zipcode = document.getElementById('zip');

zipcode.addEventListener('input', () => {
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity('The zip code must be 5 digits.');
    } else {
        zipcode.setCustomValidity('');
    }
});