const form = document.querySelector('form');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');

const zipcode = document.querySelector('#zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.subtext + span.error');

const passwordConfirmation = document.querySelector('#password-confirmation');
const passwordConfirmationError = document.querySelector('#password-confirmation + span.error');

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showEmailError();
        e.preventDefault();
    } else if (!country.validity.valid) {
        showCountryError();
        e.preventDefault();
    } else if (!zipcode.validity.valid) {
        showZipcodeError();
        e.preventDefault();
    } else if (!password.validity.valid) {
        showPaswordError();
        e.preventDefault();
    } else if (!passwordConfirmation.validity.valid) {
        showPasswordConfirmationError();
        e.preventDefault();
    }
})

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = 'Your email looks correct.';
        emailError.className = 'error correct';
    } else {
        showEmailError();
    }
})

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryError.textContent = 'Your country looks correct.';
        countryError.className = 'error correct';
    } else {
        showCountryError();
    }
})

zipcode.addEventListener('input', () => {
    if (zipcode.validity.valid) {
        zipcodeError.textContent = 'Your zip code looks correct.';
        zipcodeError.className = 'error correct';
    } else {
        showZipcodeError();
    }
})

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = 'You entered a valid password.';
        passwordError.className = 'error correct';
    } else {
        showPasswordError();
    }
})

passwordConfirmation.addEventListener('input', () => {
    if (password.value === passwordConfirmation.value) {
        passwordConfirmationError.textContent = 'Your passwords match.';
        passwordConfirmationError.className = 'error correct';
    } else {
        showPasswordConfirmationError();
    }
})

const showEmailError = () => {
    if(email.validity.valueMissing) {
        emailError.textContent = 'You need to enter a valid e-mail address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${ email.minlength } characters; you entered ${ email.value.length }.`;
    }
    emailError.className = 'error active';
}

const showCountryError = () => {
    if(country.validity.valueMissing) {
        countryError.textContent = 'You need to enter a valid country.';
    } else if (country.validity.typeMismatch) {
        countryError.textContent = 'Entered value needs to be a country.';
    } else if (country.validity.tooShort) {
        countryError.textContent = `Country should be all letters with no numbers.`;
    }
    countryError.className = 'error active';
}

const showZipcodeError = () => {
    if(zipcode.validity.valueMissing) {
        zipcodeError.textContent = 'You need to enter a valid zip code.';
    } else if (zipcode.validity.patternMismatch) {
        zipcodeError.textContent = 'Entered value needs to be a zip code.';
    } else if (zipcode.validity.tooShort) {
        zipcodeError.textContent = `Zip code should be all numbers with no letters.`;
    }
    zipcodeError.className = 'error active';
}

const showPasswordError = () => {
    if(password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a valid password.';
    } else if (password.validity.typeMismatch) {
        passwordError.textContent = 'Entered value needs that follows the requirements.';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${ password.minlength } characters; you entered ${ password.value.length }.`;
    }
    passwordError.className = 'error active';
}

const showPasswordConfirmationError = () => {
    if(passwordConfirmation.validity.valueMissing) {
        passwordConfirmationError.textContent = 'You need to enter the same password as above.';
    } else if (password.value !== passwordConfirmation.value) {
        passwordConfirmationError.textContent = 'Entered value needs to be the same as the previous password.';
    }
    passwordConfirmationError.className = 'error active';
}
