import {View,Text, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
import ApiCall from '../../Redux/Home/action';
import HomeStyle from './style';
import FlatListRenderView from '../../Components/render';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
const navigation=useNavigation();
  const dispatch = useDispatch();
  const reff=useRef(null)
  const {ApiData, Page,mainLoading} = useSelector(store => store.HomeReducer);


  useEffect(() => {
    dispatch( ApiCall( 'photo',value => console.log(value)))
  }, []);



  function debounce(func, timeout = 1000) {
    let timer;
    return (txt) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(txt)                         
      }, timeout);
    };
  }

  const helperFun = useCallback(
    debounce(txt =>{
      if(!mainLoading){
        dispatch({type: 'ADD_DATA', payload: {ApiData: []}})
        dispatch({type: 'PAGE', payload: {Page: 1}});
      }
      dispatch(ApiCall(txt))
    }
    ),[]);
  

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
      <Text style={HomeStyle.headerText}>Photos List</Text>

      </TouchableOpacity>

      <View style={HomeStyle.searchView}>
        <View style={HomeStyle.search}>
          <TextInput
            placeholder="Search"
            onChangeText={txt => {
              helperFun(txt)
            }}
          />
        </View>
      </View>

      {ApiData.length > 0 ? (
        <FlatListRenderView data={ApiData} reff={reff} />
      ) : (
        <ActivityIndicator style={styles.main} size="large" color="grey" />
      )}

      <TouchableOpacity
        style={styles.btnSty}
        onPress={() => {
          reff.current.scrollToOffset({offset: 0});
        }}>
        <IconAntDesign name={'arrowup'} size={40}/>
      </TouchableOpacity>
    </View>
  );

}

export default Home;
