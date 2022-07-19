import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../Utils/Style';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {SignIn} from '../../Utils/CommonAuthFun';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
import { CheckVlaidation } from '../../Utils/validation';

import images from '../../Utils/images';
import { useDispatch } from 'react-redux';
const LoginScreen = () => {
  const navigation = useNavigation();

 
const dispatch=useDispatch();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [validEmail,setValidEmail]=useState(false);
  const [validPassword,setValidPassword]=useState(true);
  
const helperFunEmail=useCallback((txt)=>{
  setValidEmail(CheckVlaidation({text:txt,type:"email"}))
      setEmail(txt)
},[])

const helperFunPass=useCallback((txt)=>{
  setPassword(txt)
},[])

  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Sign In</Text>

      <View style={styles.loginImageView}>
        <Image source={images.loginScreenImage} style={styles.loginImage} />
      </View>

      <View style={styles.formContainer}>
        <CommonInput
         value={email}
          setFunction={helperFunEmail}
          placeholder={'Email'}
        />

        <Text style={styles.errorText}>
          {validEmail ? '' : email?.length > 0 ? 'Invalid Email' : ''}
        </Text>

        <CommonInput
        value={password}
          setFunction={helperFunPass}
          placeholder={'Password'}
        />
         <Text style={styles.errorText}>
          {validPassword? '' :'please enter the password'}
        </Text>
      </View>

      <CommonButton
      
      buttonDisable={validEmail}
        onPressFun={() =>{
          password?.length>0?setValidPassword(true):setValidPassword(false)
          SignIn(
            email,
            password,
            userData => {
              if (userData) {
                console.log('on login userData',userData);
                dispatch({type:'SET_UID',payload:{userUid:userData.user._user.uid}})
                // navigation.replace('home');
              }
            },
            err => ErrorHandling(err),
          )}
        }
        style={styles.btnStyle}
        textStyle={styles.btnText}
        label={'Sign In'}
      />

      <View style={styles.bottomTextContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('signUp')}>
          <Text style={styles.bottomTouchableText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(LoginScreen);
