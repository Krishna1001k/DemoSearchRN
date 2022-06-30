import {View, Text, TouchableOpacity,Image} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import loginStyles from '../Login/LoginStyle';
import {SignUp} from '../../Utils/CommonAuthFun';
import styles from '../../Utils/Style';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
import images from '../../Utils/images';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [cred, setCred] = useState({
    name: '',
    email: '',
    password: '',
    confrimPassword: '',
  });
  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Sign Up</Text>
      <View style={styles.loginImageView}>

    <Image source={images.loginScreenImage} style={styles.loginImage} />


    </View>
      <View style={styles.formContainer}>
    
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
        style={styles.btnStyle}
        textStyle={styles.btnText}
        label={'Sign Up'}
      />

      <View style={styles.bottomTextContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.bottomTouchableText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
