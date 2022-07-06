import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../Utils/Style';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {SignIn} from '../../Utils/CommonAuthFun';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
import debounce from '../../Utils/debounceFunction';
import { CheckVlaidation } from '../../Utils/validation';

import images from '../../Utils/images';
const LoginScreen = () => {
  const navigation = useNavigation();

 

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [validEmail,setValidEmail]=useState(false);
  


  const helperFun = debounce((txt, type) => {

   if( type === 'email'){
    setValidEmail(CheckVlaidation({text:txt,type}))
      setEmail(txt)
    }
      else {
        setPassword(txt)
      }
    
  });

  // useCallback(myfun=(txt)=>{CheckVlaidation(txt)},[])
  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Sign In</Text>

      <View style={styles.loginImageView}>
        <Image source={images.loginScreenImage} style={styles.loginImage} />
      </View>

      <View style={styles.formContainer}>
        <CommonInput
          setFunction={txt => helperFun(txt, 'email')}
          placeholder={'Email'}
        />

        <Text style={styles.errorText}>
          {validEmail ? '' : email?.length > 0 ? 'Invalid Email' : ''}
        </Text>

        <CommonInput
          setFunction={txt => helperFun(txt, 'password')}
          placeholder={'Password'}
        />
      </View>

      <CommonButton
      buttonDisable={validEmail}
        onPressFun={() =>
          SignIn(
            email,
            password,
            userData => {
              if (userData) {
                console.log(userData);
                // dispatch({type:'SET_UID',payload:{userUid:userData.user._user.uid}})
                // navigation.replace('home');
              }
            },

            err => ErrorHandling(err),
          )
        }
        style={styles.btnStyle}
        textStyle={styles.btnText}
        label={'Sign In'}
      />

      <View style={styles.bottomTextContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.bottomTouchableText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
