import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { forwardRef } from 'react';
import styles from '../Utils/Style';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { sagaApiCall } from '../Redux/saga/sagaActionGenerators';
import { INCREASE_PAGE,SET_LISTLOAD, } from '../Redux/Home/reducer';
const Render = forwardRef((props,ref) => {
  const navigation = useNavigation();
  const {Page, myText, listLoading,ApiData} = useSelector(store => store.HomeReducer);
  console.log('text in render ',myText);
  const dispatch = useDispatch();

  const onEndReached=() => {
    console.log('HomeOnEndReached   page:', Page, listLoading);
    if (listLoading === false) {
      dispatch({type: SET_LISTLOAD, payload: {listLoading: true}});
      dispatch({type: INCREASE_PAGE, payload: {Page:Page + 1}});
      dispatch(sagaApiCall(Page+1,myText));
    }
  }
  const rendrItems = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', item)}
        activeOpacity={0.7}
        style={styles.cards}>
        <Image style={styles.cardImage} source={{uri: item.urls.small}} />

        <View style={styles.userDetailView}>
          <Text numberOfLines={1} style={styles.userNameText}>
            {item.user.name}
          </Text>
          <Text numberOfLines={1} style={styles.locationText}>
            {item.user.location}
          </Text>
          {item.tags.length > 0 && (
            <Text style={styles.hashTagText}>{`#${item.tags[0].title}`}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flatListView}>
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginBottom:100}}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => rendrItems(item)}
        
        ListFooterComponent={
          listLoading && <ActivityIndicator size={'large'} color="grey" />
        }

        onEndReached={ApiData.length>=10?onEndReached:null}
        ref={ref}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
})

export default Render;
