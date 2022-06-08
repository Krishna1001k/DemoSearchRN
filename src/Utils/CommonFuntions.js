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
