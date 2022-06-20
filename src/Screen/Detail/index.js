import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../Utils/Style';
import detailStyle from './style';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonRatingView} from '../../Utils/CommonFuntions';
import {useSelector, useDispatch} from 'react-redux';
import PhotosListApiCall from '../../Redux/Detail/action';
import renderItems from '../../Components/renderItems';

const Detail = () => {
  const navigation = useNavigation();

  const {photosList, page,photosListLoader} = useSelector(store => store.DetailReducer);

  const dispatch = useDispatch();

  const {
    params: {urls, user, alt_description},
  } = useRoute();

  useEffect(() => {
    dispatch(PhotosListApiCall(user));
  }, []);

  return (
    <View style={detailStyle.main}>
      <TouchableOpacity
        style={detailStyle.backArrowView}
        onPress={() => {
          dispatch({type: 'INCREASE_PAGE', payload:{page:1}}),
          dispatch({type:"ADD_LIST",payload:{photosList:[]}}),
          navigation.goBack()
          }}>
        <Ionicons name={'arrow-back'} size={35} />
      </TouchableOpacity>

      <Text style={detailStyle.detailText}>Profile Details</Text>

      <Image
        style={styles.profileImage}
        source={{uri: user.profile_image.large}}
      />


      <View style={detailStyle.viewStyle}>
        <View style={detailStyle.userDtailView}>

          <Text numberOfLines={1} style={styles.cardHeaderText}>{user.name}</Text>
          <Text numberOfLines={1} style={styles.locationText}>{user.location}</Text>

          <View style={detailStyle.detailRatingView}>
            <CommonRatingView numbers={user.total_likes} label={'Likes'} />
            <CommonRatingView numbers={user.total_photos} label={'Photos'} />
            <CommonRatingView
              numbers={user.total_collections}
              label={'Collections'}
            />
          </View>
        </View>

        <FlatList
          data={photosList}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={detailStyle.flatListStyle}
          keyExtractor={(item,index)=>item.id+index}

          renderItem={({item}) => renderItems(item)}
          numColumns={3}
          onEndReached={() => {
            console.log('onEndReached run');
            console.log('page: ', page);

            if(!photosListLoader){
              dispatch({type: 'INCREASE_PAGE', payload:{page:page+1}});
              dispatch({type: 'LOADER', payload:{photosListLoader:true}});
              dispatch(PhotosListApiCall(user));
            }
           
          }}
          onEndReachedThreshold={0.5}
        />
      </View>
    </View>
  );
};

export default Detail;
