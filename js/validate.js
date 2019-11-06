const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

window.onload = () => {
  password1.onchange = validatePassword;
  password2.onchange = validatePassword;
};

const validatePassword = () => {
  const firstPasswordValue = password1.value;
  const secondPasswordValue = password2.value;
  const error = document.querySelector('.error');

  if (firstPasswordValue !== secondPasswordValue) {
    password2.setCustomValidity(`Passwords don't match.`);
    error.classList.add('active');
    error.textContent = `Passwords don't match`;
  } else {
    password2.setCustomValidity('');
    error.classList.remove('active');
    error.textContent = '';
  }

  if (firstPasswordValue !== "" && firstPasswordValue === secondPasswordValue) {
    if (firstPasswordValue.length < 8) {
      password1.setCustomValidity(`Password must contain at least eight characters`);
      password1.focus();
      error.classList.add('active');
      error.textContent = `Password must contain at least eight characters`;
    }

    let regX = /[0-9]/g;
    if (!regX.test(firstPasswordValue)) {
      password1.setCustomValidity(`Password must contain at least one number`);
      password1.focus();
      error.classList.add('active');
      error.textContent = `Password must contain at least one number`;
    }

    regX = /[a-z]/g;
    if (!regX.test(firstPasswordValue)) {
      password1.setCustomValidity(`Password must at least have a lower case letter`);
      password1.focus();
      error.classList.add('active');
      error.textContent = `Password must at least have a lower case letter`;
    }

    regX = /[A-Z]/g;
    if (!regX.test(firstPasswordValue)) {
      password1.setCustomValidity(`Password must at least have an upper case letter`);
      password1.focus();
      error.classList.add('active');
      error.textContent = `Password must at least have an upper case letter`;
    }

    regX = /[\!\@\#\$\%\^\&\*]/g;
    if (!regX.test(firstPasswordValue)) {
      password1.setCustomValidity(`Password must at least contain the characters: !, @, #, $, %, ^, &, or *`);
      password1.focus();
      error.classList.add('active');
      error.textContent = `Password must at least contain the characters: !, @, #, $, %, ^, &, or *`;
    }
  }
};