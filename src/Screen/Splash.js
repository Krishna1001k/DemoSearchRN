import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../Utils/Style'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
      let subscriber
        setTimeout(() => {
           subscriber=auth().onAuthStateChanged((user)=>{
             if(user)navigation.replace('home')
             else navigation.replace('login')

            })
        }, 2000);
        return subscriber
        
    },[])
  return (
    <View style={{flex:1}}>
      <Image  source={require('../Assets/Imges/splash.jpeg')}/>
    </View>
  )
}

export default Splash