import {View, Image,Animated,TouchableOpacity,ImageBackground} from 'react-native';
import React from 'react';
import detailStyle from './style';
import styles from '../../Utils/Style';
const ImageModalView = props => {

  console.log('path------asdf--', props);

  return (
    <ImageBackground  style={[styles.modalImageStyle,{backgroundColor:'grey'}]}>
   <Image
        style={detailStyle.modalImageStyle}
        source={{uri:props?.modalImage?.path}}
      />
    </ImageBackground>
   
  );
};

export default ImageModalView;
