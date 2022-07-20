import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {SignUp} from '../../Utils/CommonAuthFun';
import styles from '../../Utils/Style';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
import images from '../../Utils/images';
import debounce from '../../Utils/debounceFunction';
import {CheckVlaidation} from '../../Utils/validation';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);


  const helperFunEmail=useCallback((txt,type)=>{
    setValidEmail(CheckVlaidation({text: txt, type}));
    setEmail(txt);
  },[])
  
  const helperFunPass=useCallback((txt,type)=>{
    setPassword(txt);
    setValidPassword(CheckVlaidation({text: txt, type}));
  },[])


  // const helperFun = (txt, type) => {
  //   if (type === 'email') {
  //     setValidEmail(CheckVlaidation({text: txt, type}));
  //     setEmail(txt);
  //   } else if (type==='password') {
  //     setPassword(txt);
  //     setValidPassword(CheckVlaidation({text: txt, type}));
  //   }

  // };

  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Sign Up</Text>
      <View style={styles.loginImageView}>
        <Image source={images.loginScreenImage} style={styles.loginImage} />
      </View>
      <View style={styles.formContainer}>
        <CommonInput
        value={email}
          setFunction={txt => helperFunEmail(txt, 'email')}
          placeholder={'Email'}
        />

        <Text style={styles.errorText}>
          {validEmail ? '' : email?.length > 0 ? 'Invalid Email' : ''}
        </Text>

        <CommonInput
        value={password}
          setFunction={txt => helperFunPass (txt, 'password')}
          placeholder={'Password'}
        />
        <Text style={styles.errorText}>
          {validPassword
            ? ''
            : password?.length >=6
            ? 'Weak Password'
            : password?.length > 0
            ? 'At least 6 Character Required'
            : ''}
        </Text>
        
      </View>
      <CommonButton 
      buttonDisable={validPassword&&validEmail}
        onPressFun={() => {
          SignUp(
            email,
            password,
            userData => {
              if (userData) {
                dispatch({type:'SET_UID',payload:{userUid:userData.user._user.uid}})
                // navigation.replace('login');
              }
            },
            error => ErrorHandling(error),
          );
        }}
        style={styles.btnStyle}
        textStyle={styles.btnText}
        label={'Sign Up'}
      />

      <View style={styles.bottomTextContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('login')}>
          <Text style={styles.bottomTouchableText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
