import {View,Text, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
import ApiCall from '../../Redux/Home/action';
import HomeStyle from './style';
import Render from '../../Components/render';

const Home = () => {
  const dispatch = useDispatch();
  const [text,setText]=useState('');
  const {ApiData, Page} = useSelector(store => store.HomeReducer);


  useEffect(() => {
    dispatch( ApiCall( 'photo',value => console.log(value)))
  }, []);

  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {func.apply(this, args)}, timeout);
    }
  }

  const helperFun = useCallback(
    debounce(txt =>
      dispatch(ApiCall(txt,(bool) =>{bool?console.log(bool):dispatch({type: 'ADD_DATA', payload:{ApiData:[]}})}),
      ),
    ),
    [],
  );
  

  return( 
   
    <View style={styles.main}>
      <Text style={HomeStyle.headerText}>Photo Gallery</Text>
      <View style={HomeStyle.searchView}>
        <TextInput
          placeholder="Search"
          onChangeText={txt => {helperFun(txt) ,setText(txt),dispatch({type: 'PAGE', payload: {Page:1}})
          }}
        />
      </View>
      {ApiData.length>0 ? (
        <Render data={ApiData} />
      ) : (
        <ActivityIndicator style={styles.main} size="large" color="grey" />
      )}
    </View>
    )

}

export default Home;
