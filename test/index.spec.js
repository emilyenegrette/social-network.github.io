// importamos la funcion que vamos a testear
import {
  loginEmailPassword,
  registerEmailPassword,
  signGoogle,
  logOut,
  verification,
  getUserData,
} from '../src/lib/firebase.js';

//  TESTS FUNCIONES REGISTRO
//  registerEmailPassword

describe(registerEmailPassword, () => {
  it(' registerEmailPassword debería ser una función', () => {
    expect(typeof registerEmailPassword).toBe('function');
  });
});

//  TESTS FUNCIONES LOGIN/LOGOUT
//  loginEmailPassword

describe(loginEmailPassword, () => {
  it(' loginEmailPassword debería ser una función', () => {
    expect(typeof loginEmailPassword).toBe('function');
  });
  /*  it('Deberia retornar el ingreso de los usuarios',() => {
    expect(loginEmailPassword(dataHarryPotter, 'usuarios')).toBe(orderNames);
  }); */
});

// signGoogle

describe(signGoogle, () => {
  it('debería ser una función', () => {
    expect(typeof signGoogle).toBe('function');
  });
});

// logOut
describe(logOut, () => {
  it('debería ser una función', () => {
    expect(typeof logOut).toBe('function');
  });
});

// TESTS FUNCIONES POSTS

// verification
describe(verification, () => {
  it('debería ser una función', () => {
    expect(typeof verification).toBe('function');
  });
});

// getUserData
describe(getUserData, () => {
  it('debería ser una función', () => {
    expect(typeof getUserData).toBe('function');
  });
});
