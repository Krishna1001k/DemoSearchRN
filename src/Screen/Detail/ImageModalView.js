import {View, Image,Animated,ActivityIndicator,TouchableOpacity,ImageBackground} from 'react-native';
import React, { useEffect } from 'react';
import detailStyle from './style';
import styles from '../../Utils/Style';
const ImageModalView = props => {

const {modalImage:{urls}}=props;

const [onLoading,setLoading]=React.useState(false)

   const ThumbImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image style={detailStyle.image} source={{uri: urls.thumb}} />
        <ActivityIndicator
          style={detailStyle.activityStyle}
          size={'large'}
          color={'#76BA99'}
        />
      </View>
    );
  };

 const FullImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image
          style={detailStyle.image}
          source={{uri: urls.full}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    );
  };

  console.log('path------asdf--', props);


//   useEffect(()=>{
// console.log(onLoading);
//   },[onLoading])

  return (


 <>
  {onLoading&&ThumbImageViewFun()}

{
  FullImageViewFun()
}
 </>
  
  
   
  )
};

export default ImageModalView;
