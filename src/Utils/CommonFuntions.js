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