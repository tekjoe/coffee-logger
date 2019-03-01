import { firebase, googleAuthProvider } from "../firebase/firebase";

export const startLogin = () => {
  console.log("loggin in");
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  console.log("loggin out");
  return dispatch => {
    return firebase.auth().signOut();
  };
};
