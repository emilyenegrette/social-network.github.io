/* eslint import/no-unresolved: [2, { ignore: ['gstatic'] }] */
import {
  getDatabase,
  ref,
  runTransaction,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';

import {
  getFirestore,
  arrayUnion,
  arrayRemove,
  collection,
  addDoc,
  doc,
  Timestamp,
  query,
  getDoc,
  getDocs,
  updateDoc,
  orderBy,
  onSnapshot,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from './firebasemodules.js';

import { app } from './firebaseconfig.js';

// -----------Firebase Login autorización
const auth = getAuth();
const provider = new GoogleAuthProvider();
const getUserData = () => auth.currentUser;

// -----------Ingresar con Email y contraseña
const loginEmailPassword = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback(true);
      return userCredential;
      // console.log('entraste jeje');
    })
    .catch((error) => {
      const errorCode = error.code;
      //  const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        /*  alert(errorCode); */
        return errorCode;
      }
      if (errorCode === 'auth/wrong-password') {
        /*  alert(errorCode); */
        return errorCode;
      }
      callback(false);
      return errorCode;
    });
};

// ----------- Enviar correo de verificacion
const emailVerification = () => {
  sendEmailVerification(auth.currentUser).then(() => {
    /* alert(
      'Se ha enviado un mensaje de verificación a tu correo electrónico'); */
  });
};

// -----------Registrarse con Email y Contraseña

const registerEmailPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.hash = '#/posts';
      // Signed in
      const user = userCredential.user;
      emailVerification(auth);
      //  const userId = user.uid;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(user);
      return errorCode;
    });
};

// -------- Permite verificar si hay un usuario conectado

const verification = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = auth.currentUser;
      // console.log(user);
      window.location.hash = '#/posts';
      return currentUser;
    }
    // window.alert('no estás logueada');
    window.location.hash = '#/login';
    return 'not logged';
    // location.reload();
  });
};

// -------------- Cerrar sesión

const logOut = () => {
  signOut(auth)
    // alert('tesalistes')
    .then(() => {
      window.location.hash = '#/login';
      alert('adiosito! vuelve pronto');
    })
    .catch((error) => error);
};

// ----------- Ingreso con Google

const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      alert('Bienvenidx!');
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
      // console.log('resultó google jeje');
      return credential;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      alert('No fue posible ingresar con Google');
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return errorCode;
    });
};

// ----------- Reestablecer contraseña olvidada

const resetPass = (email, callback) => {
  sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
      callback(true);
      alert('Enviamos un correo, revisa tu carpeta de spam!');
      return userCredential;
      // console.log('entraste jeje');
    })
    .catch((error) => {
      callback(false);
      alert('No es posible recuperar tu contrasena');
      // const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};

const db = getFirestore();

// pruebita de promesas Emi

/*
const resetPass = (email, callback) => {
  sendPasswordResetEmail(auth, email)
  new Promise (resolve, reject) => {
    setTimeout(() => resolve(resetPass), 1000)
    .then((userCredential) => {
      callback(true);
    alert('Enviamos un correo, revisa tu carpeta de spam!');
    })
    setTimeout(() => reject(resetPass), 1000)
    .catch((error) => {
      callback(false);
      alert('No es posible recuperar tu contrasena');

    });
  }
   */

// ----------- Guardar Posts

const newPosts = async (textInput) => {
  const user = auth.currentUser;
  // const userName = user.displayName;
  if (user !== null) {
    const docRef = await addDoc(collection(db, 'google'), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      description: [textInput],
      likes: [],
      likesCount: 0,
      date: Timestamp.fromDate(new Date()),
      pfp: user.photoURL,
    });
    console.log('Document written with ID: ', docRef.id);
    location.reload();
    return docRef.uid;
  }
};

// ----------- Mostrar Posts

const displayPosts = async () => {
  const posts = query(collection(db, 'google'));
  const querySnapShot = await getDocs(posts);
  const todosPosts = [];
  querySnapShot.forEach((doc) => {
    todosPosts.push({ ...doc.data(), id: doc.id });
  });
  return todosPosts;
};

// ---------- Likes ------

const likePost = async (id) => {
  const postId = [id].toString();
  // console.log(postId);
  let userIdentification = getUserData();
  userIdentification = userIdentification.uid;
  const postRef = doc(db, 'google', postId);
  console.log(postRef);
  const docPost = await getDoc(postRef);
  const dataLike = docPost.data();
  if (dataLike.likes.includes(userIdentification)) {
    await updateDoc(
      postRef,
      {
        likes: arrayRemove(userIdentification),
      },
      document.getElementById(`${id}-likeImg`).setAttribute('class', 'emptyLike'),
      console.log('dislike'),
    );
    console.log('docPost', docPost);
  } else {
    await updateDoc(
      postRef,
      {
        likes: arrayUnion(userIdentification),
      },
      document.getElementById(`${id}-likeImg`).setAttribute('class', 'fullLike'),
      console.log('like'),
    );
  }
};

const likesCountRef = (id) => {
  onSnapshot(doc(db, 'google', id), (doc) => {
    const result = doc.data().likes.length;
    const divNum = document.getElementById(`${id}-count`);
    divNum.textContent = '';
    divNum.textContent += result;
    console.log(result);
    return result;
  });
};

// ------------ Delete post ----------/

function deletePost(id) {
  deleteDoc(doc(db, 'google', id))
    .then(() => location.reload()) /* console.log('exito al borrar')) */
    .catch((error) => console.log('error', error));
}

// ----------- Comment Post -------

export {
  db,
  app,
  auth,
  loginEmailPassword,
  logOut,
  verification,
  registerEmailPassword,
  signGoogle,
  getUserData,
  resetPass,
  newPosts,
  displayPosts,
  likePost,
  deletePost,
  likesCountRef,
};
