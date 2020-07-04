const startBTN = document.querySelector('#get-started');
const overlayPopup = document.querySelector('.overlay_popup');
const mainPopup = document.querySelector('.main-popup');
const login = document.querySelector('#sign-in');
const register = document.querySelector('#register');
const formLogin = document.querySelector('#login-form');
const formRegister = document.querySelector('#register-form');
const closeBTN = document.querySelector('#popup-close-button a');
const password = document.querySelector('#register-password');
const passwordConfirm = document.querySelector('#confirm-register-password');

export const formStatusCodes = {
  unreliable: 'НЕНАДЕЖНЫЙ ПАРОЛЬ.',
  mismatched: 'ПАРОЛИ НЕ СОВПАДАЮТ.',
  incorrect: 'НЕВЕРНЫЙ ПАРОЛЬ.',
};

export const inputHandler = () => {
  const registerInputs = Array.from(document.querySelectorAll('#register-form input'));
  const loginInputs = Array.from(document.querySelectorAll('#login-form input'));
  const inputsArray = [...registerInputs, ...loginInputs];
  inputsArray.forEach((input) => {
    input.addEventListener('focus', (e) => {
      const parent = e.target.parentNode;
      const label = parent.querySelector('label');
      label.classList.add('active');
    });
    input.addEventListener('blur', (e) => {
      if (input.value === '') {
        const parent = e.target.parentNode;
        const label = parent.querySelector('label');
        label.classList.remove('active');
      }
    });
  });
};

export const passwordIsValid = (pass) => {
  const regExp = /^(?=.*[a-zа-я])(?=.*[+-_@$!%*?&#.,;:[\]{}])(?=.*[0-9]).{8,}$/i;
  return regExp.test(pass);
};

export const setAlarm = (element, code) => {
  const el = element;
  el.value = '';
  el.classList.add('is-invalid');
  const parent = el.parentNode;
  const labelText = parent.querySelector('label span');
  labelText.innerText = formStatusCodes[code];
};

export const resetAlarm = (element) => {
  const el = element;
  el.classList.remove('is-invalid');
  const parent = el.parentNode;
  const labelText = parent.querySelector('label span');
  labelText.innerText = 'Пароль...';
};

export const formValidation = () => {
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if (passwordIsValid(password.value)) {
      resetAlarm(password);
      if (password.value === passwordConfirm.value) {
        passwordConfirm.classList.remove('is-invalid');
        formRegister.submit();
      } else {
        setAlarm(passwordConfirm, 'mismatched');
      }
    } else {
      setAlarm(password, 'unreliable');
    }
  });
};

export const startButtonHandler = () => {
  startBTN.addEventListener('click', (e) => {
    e.preventDefault();
    overlayPopup.classList.add('visible');
    mainPopup.classList.add('visible');
    login.classList.remove('active');
    register.classList.add('active');
    formLogin.classList.remove('move-left');
    formRegister.classList.remove('move-left');
  });
};

export const overlayHandler = () => {
  overlayPopup.addEventListener('click', () => {
    overlayPopup.classList.remove('visible');
    mainPopup.classList.remove('visible');
  });
};

export const closeBTNHandler = () => {
  closeBTN.addEventListener('click', (e) => {
    e.preventDefault();
    overlayPopup.classList.remove('visible');
    mainPopup.classList.remove('visible');
  });
};

export const loginHandler = () => {
  login.addEventListener('click', () => {
    login.classList.add('active');
    register.classList.remove('active');
    formLogin.classList.add('move-left');
    formRegister.classList.add('move-left');
  });
};

export const registerHandler = () => {
  register.addEventListener('click', () => {
    login.classList.remove('active');
    register.classList.add('active');
    formLogin.classList.remove('move-left');
    formRegister.classList.remove('move-left');
  });
};