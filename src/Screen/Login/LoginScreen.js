import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
    webClientId: '270302728780-sghtitrnkatc5t5monte52v3emp00bp4.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
   const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

const LoginScreen = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>google</Text>
      </TouchableOpacity>
      <Text>LoginScreen</Text>
      <GoogleSigninButton
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          ).catch(err=>console.log('error occured',err))
        }
      />
    </View>
  );
}

export default LoginScreen