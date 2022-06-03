import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../Utils/Style'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('home')
        }, 2000);
    },[])
  return (
    <View style={{flex:1}}>
      <Image source={require('../Assets/Imges/splash.jpeg')}/>
    </View>
  )
}

export default Splash