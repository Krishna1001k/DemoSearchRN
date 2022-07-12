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
import RenderRecentSearch from '../../Components/RenderRecentSearch';
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
    dispatch({type: 'SET_MAINLOAD', payload: {mainLoading:true}});
    setText(txt);
    if (!mainLoading) {
      dispatch({type: 'ADD_DATA', payload: {ApiData: []}});
      dispatch({type: 'PAGE', payload: {Page: 1}});
    }

    !mainLoading&& onBlur(txt)
    dispatch(ApiCall(txt));
  });

  const onBlur = search => {
    let index = recentSearch.findIndex(ele => {
       let eleText=ele.trim();
       eleText=eleText.toUpperCase();
       let searchText=search.trim()
       searchText=searchText.toUpperCase();
      return (eleText === searchText)
    });

    if (index != -1) {
      recentSearch.splice(index, 1);
    }

    search?.length > 0 && recentSearch.unshift(search);
    dispatch({type: 'SET_RECENT_SEARCH', payload: {recentSearch}});

    dispatch(fireStoreSetFun());
    console.log('myarrrrrrrrr', recentSearch);
  };

  const onClickItem = index => {

    if (!mainLoading) {
      dispatch({type: 'ADD_DATA', payload: {ApiData: []}});
      dispatch({type: 'PAGE', payload: {Page: 1}});
    }
    dispatch(ApiCall(recentSearch[index]));
    setText(recentSearch[index]);
    onBlur(recentSearch[index]);
  };

  const renderItem = row => {
    const {item, index} = row;
    return (
      <RenderRecentSearch index={index} onClickItem={onClickItem} item={item} />
    );
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
            // onBlur={() => }
            // value={text}
            placeholder="Search"
            onChangeText={txt => {
              helperFun(txt);
            }}
          />
        </View>

        {recentSearch.length > 0 && (
          <>
            <Text style={HomeStyle.recentSearchHeaderText}>Recent Search</Text>

            <FlatList
              bounces={false}
              data={recentSearch.slice(0, 5)}
              keyExtractor={(key, index) => key + index}
              style={{marginLeft: 15}}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              horizontal
            />
          </>
        )}
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
