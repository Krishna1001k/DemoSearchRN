import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../Utils/Style'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
const Splash = () => {
  const dispatch=useDispatch();
    const navigation=useNavigation();
    useEffect(()=>{
      let subscriber
      setTimeout(() => {
        subscriber= auth().onAuthStateChanged((user)=>{
          console.log('myUser',user);
          if(user){
           firestore()
           .collection('Users')
           .doc(user.uid)
           .get()
           .then((res)=>{
             console.log('firestore data from get api call->',res);
             if(res.exists){
               dispatch({type:'SET_RECENT_SEARCH',payload:res.data()})
             }
             else{
               console.log('recent search kahli hogya');
               dispatch({type:'SET_RECENT_SEARCH',payload:[]})
             }
             navigation.replace('home')
           })
           .catch((err)=>console.log(err))
  
            console.log('Spalsh Screen user',user.uid);
           dispatch({type:'SET_USER_UID',payload:{userUid:user.uid}})
         
         }
         else navigation.replace('login')
      
        
         })
       
      }, 1000);
      
      
        return subscriber
        
    },[])

   

  return (
    <View style={{flex:1}}>
      <Image  source={require('../Assets/Imges/splash.jpeg')}/>
    </View>
  )
}

export default Splash