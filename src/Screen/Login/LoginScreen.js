import React,{useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../Utils/Style';
import loginStyles from './LoginStyle';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import { SignIn } from '../../Utils/CommonAuthFun';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.main}>
      <Text style={loginStyles.headerText}>Sign In</Text>

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
        onPressFun={() =>
          SignIn(cred.email, cred.password, val => console.log(val))
        }
        style={loginStyles.btnStyle}
        textStyle={loginStyles.btnText}
        label={'Sign In'}
      />

      <View style={loginStyles.bottomTextContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={loginStyles.bottomTouchableText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
