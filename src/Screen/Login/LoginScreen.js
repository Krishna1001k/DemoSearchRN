import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../Utils/Style';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {SignIn} from '../../Utils/CommonAuthFun';
import {useNavigation} from '@react-navigation/native';
import ErrorHandling from '../../Utils/ErrorHandling';
import images from '../../Utils/images';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>Sign In</Text>

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
        onPressFun={() =>
          SignIn(
            cred.email,
            cred.password,
            userData => {
              if (userData) {
                navigation.replace('home');
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
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.bottomTouchableText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
