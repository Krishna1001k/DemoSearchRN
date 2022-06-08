import {View,Text, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
import ApiCall from '../../Redux/Home/action';
import HomeStyle from './style';
import FlatListRenderView from '../../Components/render';
import IconAntDesign from 'react-native-vector-icons/AntDesign'

const Home = () => {
  const dispatch = useDispatch();
  const [text,setText]=useState('');
  const reff=useRef(0)
  const {ApiData, Page} = useSelector(store => store.HomeReducer);


  useEffect(() => {
    dispatch( ApiCall( 'photo',value => console.log(value)))
  }, []);

  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {func(args[0])}, timeout);
    }
  }

  const helperFun = useCallback(
    debounce(txt =>
      dispatch(ApiCall(txt,(bool) =>{bool?console.log(bool):dispatch({type: 'ADD_DATA', payload:{ApiData:[]}})}),

      ),
     
    ),
    [],
  );
  

  return (
    <View style={styles.main}>
      <Text style={HomeStyle.headerText}>Photos List</Text>

      <View style={HomeStyle.searchView}>
        <View style={HomeStyle.search}>
          <TextInput
            placeholder="Search"
            onChangeText={txt => {
              helperFun(txt),
                setText(txt),
                dispatch({type: 'PAGE', payload: {Page: 1}});
                // reff.current.scrollToOffset({offset: 0})
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
