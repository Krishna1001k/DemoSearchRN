import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../../Screen/Splash'
import Home from '../../Screen/Home'
import Detail from '../../Screen/Detail'
import LoginScreen from '../../Screen/Login/LoginScreen'
import SignUpScreen from '../../Screen/SignUp/SignUpScreen'
import SettingScreen from '../../Screen/Setting'

const Route = () => {
    const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='splash' component={Splash}/>
            <Stack.Screen name='login' component={LoginScreen}/>
            <Stack.Screen name='signUp' component={SignUpScreen}/>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='detail' component={Detail}/>
            <Stack.Screen name='setting' component={SettingScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route