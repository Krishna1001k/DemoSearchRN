import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style'


export const CommonRatingView = (props) => { 
    return(
      <View style={styles.rating}>
          <Text style={styles.numberText}>{props.numbers}</Text>
          <Text>{props.label}</Text>
        </View>
    )
   }

export const SocailView = (props) => { 
  const Icons=props.Icon
    return(
      <View style={styles.social}>
        <Icons name={props.label} size={18}/>
          <Text style={styles.socialText}>{props.socialName}</Text>
        </View>
    )
   }
   export  const thumbImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image style={detailStyle.image} source={{uri: urls.thumb}} />
        <ActivityIndicator
          style={detailStyle.activityStyle}
          size={'large'}
          color={'grey'}
        />
      </View>
    );
  };

  export const fullImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image
          style={detailStyle.image}
          source={{uri: urls.full}}
          onLoadStart={() => onLoading(true)}
          onLoadEnd={() => onLoading(false)}
        />
      </View>
    );
  };

