import {
  View,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from '../Utils/Style';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const CommonInput = props => {
  const textInputRef=useRef();
  const [isHide, setIsHide] = useState(true);
  const value=useState(new Animated.Value(0))[0];

const fontSizeAnimation=()=>{
  textInputRef.current.focus()

  Animated.timing(value,{
    toValue:10,
    duration:400,
    useNativeDriver:true
  }).start()


}
const onBlur = () => { 

 !(props?.value?.length>0)&&
 Animated.timing(value,{
    toValue:0,
    duration:400,
    useNativeDriver:true
  }).start()

 }
  return (
    <TouchableOpacity  activeOpacity={1} onPress={fontSizeAnimation} style={styles.TextInputView}>
      <View style={styles.TextInputInnerView}>
      <Animated.Text 
       style={{
        position: "absolute",
        zIndex:1,
        
        transform:[
          {translateY:value.interpolate({
          inputRange:[0,10],
          outputRange:[-3,-14]
        })},
        {
          translateX:value.interpolate({
            inputRange:[0,10],
            outputRange:[4,-4]
          })
        },
       { scale:value.interpolate({
          inputRange:[0,10],
          outputRange:[1,0.8],
          extrapolate:'clamp',
        })}]
      }} >{props.placeholder}</Animated.Text>

        <TextInput
        ref={textInputRef}
        onFocus={fontSizeAnimation}
        onBlur={onBlur}
          value={props.value}
          style={styles.TextInput}
          secureTextEntry={props.placeholder === 'Password' ? isHide : false}

          onChangeText={txt => props.setFunction(txt)}
           />
          

        {props.placeholder === 'Password' ? (
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
    </TouchableOpacity>
  );
};

export default React.memo(CommonInput);
