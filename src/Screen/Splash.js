import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
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
           subscriber=auth().onAuthStateChanged((user)=>{
             console.log('myUser',user);
             if(user){
              firestore()
              .collection('Users')
              .doc(user.uid)
              .get()
              .then((res)=>{
                console.log('resData---$$$->',res.exists);

                if(res.exists){
                  dispatch({type:'SET_RECENT_SEARCH',payload:res.data()})
                }
                else{
                  dispatch({type:'SET_RECENT_SEARCH',payload:[]})

                }
                // console.log(user.getIdTokenResult().then((res)=>console.log(res)));
                
              })
              .catch((err)=>console.log(err))

            //    console.log('dafdsfadfa',user);
              dispatch({type:'SET_UID',payload:{userUid:user.uid}})
               navigation.replace('home')
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