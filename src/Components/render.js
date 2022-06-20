import {
  View,Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../Utils/Style';
import {useDispatch, useSelector} from 'react-redux';
import ApiCall from '../Redux/Home/action';
import {useNavigation} from '@react-navigation/native';



const Render = props => {

  const navigation = useNavigation();
  const {Page, myText,listLoading} = useSelector(store => store.HomeReducer);
  const dispatch = useDispatch();




 
  const rendrItems = (item) => {

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', item)}
        activeOpacity={0.7}
        style={styles.cards}>
        
        <Image style={styles.cardImage} source={{uri:item.urls.small}}/>
        
        <View style={styles.userDetailView}>
          <Text numberOfLines={1}  style={styles.userNameText}> {item.user.name}</Text>

          <Text numberOfLines={1} style={styles.locationText} > {item.user.location}</Text>

          {item.tags.length>0&&<Text style={styles.hashTagText}>{`#${item.tags[0].title}`}</Text>}

          
        </View>
      
        
       
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.flatListView}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => rendrItems(item)}
        ListFooterComponent={
          listLoading&&<ActivityIndicator size={'large'} color="grey" />
        }
        onEndReached={() => {
          console.log('HomeOnEndReached   page:',Page , listLoading );
          if(listLoading===false){
            dispatch({type: 'SET_LISTLOAD', payload: {listLoading: true}});
            dispatch({type:"PAGE", payload:{Page:Page+1}})
            dispatch(ApiCall(myText))
          }
        }}
        ref={props.reff}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
};

export default Render;
