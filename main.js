import { myRouter } from './lib/router.js';
import { verification } from './lib/firebase.js';

verification();
// Se carga la pantalla de login como pagina determinada
const init = () => {
  window.location.hash = '#/login';
  myRouter(window.location.hash);
};

init();

window.addEventListener('hashchange', () => {
  myRouter(window.location.hash);
});
