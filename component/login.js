import { loginEmailPassword, signGoogle, resetPass } from '../lib/firebase.js';
// importar resetPass

const login = () => {
  // Crea Div que contiene Titulo mainContainer
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');

  // Crea logo
  const logo = document.createElement('img');
  logo.src = './assets/audifonito-sin-pixelado.png';
  mainContainer.appendChild(logo);

  // Crea parrafo o titulo
  const title = document.createElement('h1');
  title.setAttribute('class', 'tittlepost');
  title.textContent = '/GGgirls';
  mainContainer.appendChild(title);

  // slogan

  const slogan = document.createElement('p');
  slogan.innerHTML = 'Bienvenidx!';
  slogan.setAttribute('id', 'slogan');
  mainContainer.appendChild(slogan);

  const pForSlogan = document.createElement('p');
  pForSlogan.innerHTML = 'Únete a la comunidad gamer femenina más grande de Latinoamérica!';
  mainContainer.appendChild(pForSlogan);

  // Crea ingreso de Email
  const emailContainer = document.createElement('div');
  emailContainer.setAttribute('id', 'emailContainer');
  mainContainer.appendChild(emailContainer);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('value', '');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('class', 'transparent-input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu correo o usuario');
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

  // Olvidaste contraseña
  const forgotPassword = document.createElement('h4');
  forgotPassword.innerHTML = '¿Olvidaste tu contraseña? <b>Recupérala</b>';
  mainContainer.appendChild(forgotPassword);

  const ventanaDialog = document.createElement('dialog');
  ventanaDialog.setAttribute('id', 'popUp');
  mainContainer.appendChild(ventanaDialog);

  const mainDivDialog = document.createElement('div');
  mainDivDialog.setAttribute('id', 'mainDivDialog');
  ventanaDialog.appendChild(mainDivDialog);

  const botonClosePopUp = document.createElement('button');
  botonClosePopUp.setAttribute('type', 'button');
  botonClosePopUp.setAttribute('id', 'botonClosePopUp');
  botonClosePopUp.innerHTML = 'X';
  mainDivDialog.appendChild(botonClosePopUp);

  const textForDialog = document.createElement('h2');
  textForDialog.setAttribute('id', 'titulo');
  textForDialog.innerHTML = 'Hola!';
  mainDivDialog.appendChild(textForDialog);

  const textBetween = document.createElement('h3');
  textBetween.setAttribute('id', 'olvidaste');
  textBetween.innerHTML = 'Te ayudaremos a recuperar tu contraseña!';
  mainDivDialog.appendChild(textBetween);

  const pforEmail = document.createElement('p');
  pforEmail.setAttribute('id', 'olvidaste');
  pforEmail.innerHTML = 'Por favor ingresa tu mail en este espacio y enviaremos un correo para que puedas ingresar';
  mainDivDialog.appendChild(pforEmail);

  const emailForForget = document.createElement('input');
  emailForForget.setAttribute('id', 'emailContainer');
  emailForForget.setAttribute('type', 'email');
  emailForForget.setAttribute('placeholder', 'Ingresa tu correo electronico');
  mainDivDialog.appendChild(emailForForget);

  const buttonForForget = document.createElement('button');
  buttonForForget.setAttribute('id', 'botoncito');
  buttonForForget.innerHTML = 'Enviar';
  mainDivDialog.appendChild(buttonForForget);

  /* Funciones para recuperar contraseña */
  buttonForForget.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('inputForgetEmail').value;
    const alertaReset = (valid) => {
      if (valid) {
        // usar lo que retorna la resetemail
        //  alert('Hemos enviado un email para que recuperes tu contraseña! Si no lo encuentras,
        //  revisa en spam e intenta ingresar de nuevo');
      } /* else {
        //  alert('Tu usuario no ha sido verificado, intenta con otro correo');
      } */
    };
    resetPass(email, alertaReset);
  });

  /* Funciones para abrir y cerrar Dialog */
  function showPopUp() {
    document.getElementById('popUp').showModal();
  }

  forgotPassword.addEventListener('click', showPopUp);
  function closePopUp() {
    document.getElementById('popUp').close();
  }
  botonClosePopUp.addEventListener('click', closePopUp);

  // Botones para Login e inicio de sesión con Google
  const buttonForLogin = document.createElement('button', 'a');
  buttonForLogin.setAttribute('id', 'buttonLogin');
  buttonForLogin.setAttribute('type', 'click');
  buttonForLogin.innerHTML = '<a href="#/posts">Iniciar sesión</a>';
  mainContainer.appendChild(buttonForLogin);

  const buttonForGoogle = document.createElement('button', 'a');
  buttonForGoogle.setAttribute('type', 'button');
  buttonForGoogle.setAttribute('id', 'googleButton');
  buttonForGoogle.innerHTML = '<a href="#/posts">Iniciar sesión con Google</a>';
  mainContainer.appendChild(buttonForGoogle);

  // Crea Div dentro de Div principal el donde se encuentra link a Register
  const registerContainer = document.createElement('div');
  registerContainer.classList.add('registerContainer');

  mainContainer.appendChild(registerContainer);

  // Crea texto y link que da a pagina de Register
  const pRegister = document.createElement('p');
  pRegister.innerHTML = '¿No tienes una cuenta?';
  registerContainer.appendChild(pRegister);

  const linkRegister = document.createElement('a'); /* id='linkReg' */
  linkRegister.innerHTML = '<a href="#/register"><b>Regístrate</b></a>';
  linkRegister.setAttribute('id', 'linkRegist');
  registerContainer.appendChild(linkRegister);

  /* const mainRoute = document.getElementById('mainRoute');
  const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    footer.innerHTML = `
  <p>© 2022, todos los derechos reservados.</p>
  <p>Carla J, Carolina F y Emily N.</p>
  `;
  mainRoute.appendChild(footer); */

  // Funcionalidad de botón para Login con addEventListener
  buttonForLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    // console.log(email, password);
    const alertaLogin = (valid) => {
      if (valid) {
        window.location.hash = '#/posts';
      }
    };
    loginEmailPassword(email, password, alertaLogin);
  });

  buttonForGoogle.addEventListener('click', signGoogle);

  return mainContainer;
};

// Crear footer
const footercito = () => {
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');
  footer.innerHTML = '© 2022, todos los derechos reservados. Carla J, Carolina F y Emily N.';

  return footer;
};

//  footercito();

export { login, footercito };
