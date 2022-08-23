
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'



// .....................................SinginEmail&Pass.........................................

export const SignUp = async (email,pass,successCallBack,failureCallBack) => {
  try {
    let response = await auth().createUserWithEmailAndPassword(email, pass)
    successCallBack(response)
  } 
  catch (error){
    failureCallBack(error.code)
  }
     
  };
  
  export const SignIn = async (email, pass,successCallBack,failureCallBack) => {
    try{
      let response= await auth().signInWithEmailAndPassword(email, pass)
  console.log('login api success response',response);
      successCallBack(response)
    }
    catch (error){
      console.log('sign in error',error);
      failureCallBack(error.code)
    }
   
    
  }

  export const SignOut = async () => {
    try{
  
      let response= await auth().signOut()
      console.log(response);
    }
    catch (error){
      console.log(error);
    }
  }
  
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
  