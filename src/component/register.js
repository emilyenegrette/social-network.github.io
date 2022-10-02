import { registerEmailPassword } from '../lib/firebase.js';
import { footercito } from './login.js';

// Crea Div que contiene Titulo titleContainer
const register = () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');

  // Crea logo
  const logo = document.createElement('img');
  logo.src = './assets/audifonito-sin-pixelado.png';
  mainContainer.appendChild(logo);

  // Crea parrafo o titulo
  const title = document.createElement('h1');
  title.setAttribute('class', 'tittlepost');
  title.textContent = 'Good Game Girls';
  mainContainer.appendChild(title);

  // slogan

  const slogan = document.createElement('h2');
  slogan.innerHTML = 'Bienvenidx!';
  mainContainer.appendChild(slogan);

  const pForSlogan = document.createElement('h3');
  pForSlogan.innerHTML = 'Únete a la comunidad gamer femenina más grande de Latinoamérica!';
  mainContainer.appendChild(pForSlogan);

  // Crea form para ingresar datos de Email y Password
  const emailContainer = document.createElement('div');
  emailContainer.setAttribute('id', 'emailContainer');
  mainContainer.appendChild(emailContainer);

  /*  const inputUser = document.createElement('input');
  inputUser.setAttribute('value', '');
  inputUser.setAttribute('type', 'text');
  inputUser.setAttribute('id', 'usuario');
  inputUser.setAttribute('placeholder', 'Ingresa nombre de usuario');
  inputUser.setAttribute('maxlenght', '15');
  mainContainer.appendChild(inputUser); */

  // Crea ingreso de Email
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('value', '');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailRegister');
  inputEmail.setAttribute('class', 'transparent-input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu correo');
  inputEmail.setAttribute('size', '25');
  inputEmail.setAttribute('maxlength', '40');
  inputEmail.setAttribute('required', '');
  emailContainer.appendChild(inputEmail);

  // Crea ingreso de Password
  const passwordContainer = document.createElement('div');
  passwordContainer.setAttribute('id', 'passwordContainer');
  mainContainer.appendChild(passwordContainer);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('value', '');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('class', 'transparent-input');
  inputPassword.setAttribute('id', 'passwordLogin');
  inputPassword.setAttribute('placeholder', 'Ingresa tu contraseña');
  inputPassword.setAttribute('minlength', '6');
  inputPassword.setAttribute('maxlength', '12');
  inputPassword.setAttribute('required', '');

  // mainContainer.appendChild(inputPassword);

  passwordContainer.appendChild(inputPassword);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'ojitocerrado');
  checkbox.setAttribute('id', 'ojitoabierto');

  // checkbox.setAttribute('value', 'hola');
  checkbox.setAttribute('id', 'checkbox');
  passwordContainer.appendChild(checkbox);

  // funcion de ocultado
  function showPassword() {
    const logForPassword = document.getElementById('passwordLogin');
    if (logForPassword.type === 'password') {
      logForPassword.type = 'text';
      checkbox.setAttribute('class', 'ojitocerrado');
    } else {
      logForPassword.type = 'password';
      checkbox.setAttribute('class', 'ojitoabierto');
    }
  }
  checkbox.addEventListener('click', showPassword);
  
  // Boton de Crear Cuenta
  const buttonForNewAccount = document.createElement('button');
  buttonForNewAccount.setAttribute('id', 'buttonLogin');
  buttonForNewAccount.setAttribute('type', 'button');
  buttonForNewAccount.innerHTML = 'Crear cuenta';
  mainContainer.appendChild(buttonForNewAccount);

  // Cuadrito que lleva a Login en caso de cuenta ya creada
  const registerContainer = document.createElement('div');
  registerContainer.classList.add('registerContainer');
  mainContainer.appendChild(registerContainer);

  // Link volver al login si ya tienes cuenta gg
  const parrRegister = document.createElement('p');
  parrRegister.innerHTML = '¿Ya tienes una cuenta?';
  registerContainer.appendChild(parrRegister);

  const loginForRegister = document.createElement('a');
  loginForRegister.innerHTML = '<a href="#/login"><b>Ingresa</b></a>';
  loginForRegister.setAttribute('id', 'linkRegist');
  registerContainer.appendChild(loginForRegister);

  // Guardar información de usuario para crear cuenta
  buttonForNewAccount.addEventListener('click', (e) => {
    e.preventDefault();
    // const user = document.getElementById('usuario').value;
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('passwordRegister').value;
    // console.log(email, password);
    registerEmailPassword(email, password);
    // window.location.hash = "#/posts";
  });

  return mainContainer;
};

// Crear footer
footercito();

export { register };
