import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
import {ApiCall, fireStoreSetFun} from '../../Redux/Home/action';
import HomeStyle from './style';
import FlatListRenderView from '../../Components/render';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import debounce from '../../Utils/debounceFunction';
import renderRecentSearch from '../../Components/renderRecentSearch';
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const reff = useRef(null);

  const {ApiData, mainLoading, recentSearch} = useSelector(
    store => store.HomeReducer,
  );

  useEffect(() => {
    dispatch(ApiCall('photo', value => console.log(value)));
  }, []);

  const helperFun = debounce(txt => {
    setText(txt);
    if (!mainLoading) {
      dispatch({type: 'ADD_DATA', payload: {ApiData: []}});
      dispatch({type: 'PAGE', payload: {Page: 1}});
    }
    dispatch(ApiCall(txt));
  });

  const onBlur = () => {
    let index = recentSearch.findIndex(ele => ele === text);

    if (index != -1) {
      recentSearch.splice(index, 1);
    }

    text?.length > 0 && recentSearch.unshift(text);
    dispatch({type: 'SET_RECENT_SEARCH', payload: {recentSearch}});

    dispatch(fireStoreSetFun());
    console.log('myarrrrrrrrr', recentSearch);
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerView}>
        <Text style={HomeStyle.headerText}>Photos List</Text>

        <IconAntDesign
          style={styles.settingIcon}
          onPress={() => navigation.navigate('setting')}
          name={'setting'}
          size={35}
        />
      </View>

      <View style={HomeStyle.searchView}>
        <View style={HomeStyle.search}>
          <TextInput
            onBlur={() =>(ApiData.length > 0&&onBlur())}
            placeholder="Search"
            onChangeText={txt => {
              helperFun(txt);
            }}
          />
        </View>

        <Text style={HomeStyle.recentSearchHeaderText}>Recent Search</Text>

        <FlatList
          bounces={false}
          data={recentSearch.slice(0, 5)}
          style={{marginLeft: 15}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => renderRecentSearch(item)}
          horizontal
        />
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
        <IconAntDesign name={'arrowup'} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
