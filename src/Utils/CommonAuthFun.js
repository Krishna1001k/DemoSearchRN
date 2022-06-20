
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'



// .....................................SinginEmail&Pass.........................................

export const SignUp = (email,pass,successCall) => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(res => successCall(res))
      .catch(err => {
        console.error(err);
      });
  };
  
  export const SignIn = (email, pass,successCall) => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => successCall(res))
      .catch(err => {
        console.error(err);
      })
  };
  
// .....................................GoogleSingin.........................................

GoogleSignin.configure({
    webClientId: '270302728780-sghtitrnkatc5t5monte52v3emp00bp4.apps.googleusercontent.com',
  });

  export const googleSingIn = async () => {

    try {
      const {idToken} = await GoogleSignin.signIn();
  
      const googleCred = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCred);
    } 

    catch (error) {
      console.log(error);
    }
  };
  