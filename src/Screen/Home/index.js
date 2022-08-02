import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from '../../Utils/Style';
import {useSelector, useDispatch} from 'react-redux';
// import {ApiCall, fireStoreSetFun} from '../../Redux/Home/action';
import HomeStyle from './style';
import FlatListRenderView from '../../Components/render';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import debounce from '../../Utils/debounceFunction';
import RenderRecentSearch from '../../Components/RenderRecentSearch';
import { sagaApiCall } from '../../Redux/saga/sagaActionGenerators';
import { fireStoreSetFun } from '../../Redux/saga/sagaActionGenerators';
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const reff = useRef(null);

  const {ApiData, mainLoading, recentSearch,myText} = useSelector(
    store => store.HomeReducer,
  );

  useEffect(() => {
    // dispatch(ApiCall('photo', value => console.log(value)));
    dispatch(sagaApiCall(1,'photo'))
  }, []);

  useEffect(()=>{
   helperFun(text)
  },[text])

//.......................Helper Function....................................
  const helperFun = useCallback(debounce(txt => {
    // dispatch({type: 'SET_MAINLOAD', payload: {mainLoading:true}});
    // setText(txt);
console.log('asdfghjklkjhgfdqwertyuio[poiuytwazxcvbn-------------.............m,.][poiuyre');
    dispatch(sagaApiCall(1,txt));

    if (!mainLoading) {
      console.log('untsantasdfn000)))))0000000000');
      dispatch({type: 'ADD_DATA', payload: {ApiData: []}});
      dispatch({type: 'PAGE', payload: {Page: 1}});
    }

    console.log('untsantasdfn000)))))000000--------------------000');
    addRecentSearch(txt)

  }),[]);
//...............Adding Recent Search To Firebase.............................

  const addRecentSearch = search => {
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


//......................Adding Recent Search On Click Any Recent Search Item..........  
  const onClickItem = index => {

    if (!mainLoading) {
      dispatch({type: 'ADD_DATA', payload: {ApiData: []}});
      dispatch({type: 'PAGE', payload: {Page: 1}});
    }
    dispatch(sagaApiCall(1,recentSearch[index]));
    setText(recentSearch[index]);
    addRecentSearch(recentSearch[index]);
  };
//......................Recent Search RenderItem Funtion...............................
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
            value={text}
            placeholder="Search"
            onChangeText={txt =>setText(txt)}
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

      {ApiData.length > 0? (
        <FlatListRenderView data={ApiData} ref={reff} />
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
