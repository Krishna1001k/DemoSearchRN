import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import loginStyles from '../Login/LoginStyle';
import {SignUp} from '../../Utils/CommonAuthFun';
import styles from '../../Utils/Style';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.main}>
      <Text style={loginStyles.headerText}>Sign Up</Text>
      <View style={loginStyles.formContainer}>
        <CommonInput
          callbackFun={value => setCred({...cred, ...{email: value}})}
          placeholder={'Email'}
        />
        <CommonInput
          callbackFun={value => setCred({...cred, ...{password: value}})}
          placeholder={'Password'}
        />
      </View>
      <CommonButton
        onPressFun={() => {
          SignUp(
            cred.email,
            cred.password,
            userData =>{
              if(userData){
                navigation.replace('login')
              }
            },
            error => ErrorHandling(error),
          );
        }}
        style={loginStyles.btnStyle}
        textStyle={loginStyles.btnText}
        label={'Sign Up'}
      />

      <View style={loginStyles.bottomTextContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={loginStyles.bottomTouchableText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
