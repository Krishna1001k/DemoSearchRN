import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Utils/Style';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const CommonInput = props => {
  const [isHide, setIsHide] = useState(true);
  const [labelShow, setShow] = useState(false);
  const onFocus = () => {
    setShow(true), console.log('onfucus');
  };
  return (
    <View style={styles.TextInputView}>
      <View style={styles.TextInputInnerView}>

        <TextInput
          value={props.value}
          style={styles.TextInput}
          secureTextEntry={props.placeholder === 'Password' ? isHide : false}
          onChangeText={txt => props.setFunction(txt)}
          placeholder={props.placeholder}
        />


        {props.placeholder === ('Password') ? (
          isHide ? (
            <EntypoIcon
              onPress={() => setIsHide(false)}
              name={'eye'}
              size={20}
            />
          ) : (
            <EntypoIcon
              onPress={() => setIsHide(true)}
              name={'eye-with-line'}
              size={20}
            />
          )
        ) : null}
      </View>
    </View>
  );
};

export default CommonInput;
