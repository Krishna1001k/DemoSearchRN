import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  const animateValue = useState(new Animated.Value(0))[0];
  const {photosList, page, photosListLoader} = useSelector(
    store => store.DetailReducer,
  );

  const dispatch = useDispatch();

  const {
    params: {user},
  } = useRoute();

  useEffect(() => {
    dispatch(PhotosListApiCall(user));
  }, []);

 

  return (
    <View style={detailStyle.main}>
      <View style={{...styles.headerView, paddingLeft: 10, paddingRight: 89}}>
        <TouchableOpacity
          style={detailStyle.backArrowView}
          onPress={() => {
            dispatch({type: 'INCREASE_PAGE', payload: {page: 1}}),
              dispatch({type: 'ADD_LIST', payload: {photosList: []}}),
              navigation.goBack();
          }}>
          <Ionicons name={'arrow-back'} size={35} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Profile Details</Text>
      </View>
      <Animated.View style={{
    
      transform:[{
        translateY:animateValue.interpolate({
          inputRange:[0,500],
          outputRange:[0,-50],
          extrapolate:'clamp',
        })
      }]
    }}>
        <Image
          // style={styles.profileImage}
          style={detailStyle.profileImage}
          source={{uri: user.profile_image.large}}
        />

        <View style={detailStyle.viewStyle}>
          <View style={detailStyle.userDtailView}>
            <Text numberOfLines={1} style={styles.cardHeaderText}>
              {user.name}
            </Text>
            <Text numberOfLines={1} style={styles.locationText}>
              {user.location}
            </Text>

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

            scrollEventThrottle={16}
            onScroll={(event)=>animateValue.setValue(event.nativeEvent.contentOffset.y)}

            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={detailStyle.flatListStyle}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({item}) => renderItems(item)}
            numColumns={3}
            onEndReached={() => {
              console.log('onEndReached run');
              console.log('page: ', page, photosListLoader);

              if (!photosListLoader) {
                dispatch({type: 'INCREASE_PAGE', payload: {page: page + 1}});
                dispatch({type: 'LOADER', payload: {photosListLoader: true}});
                dispatch(PhotosListApiCall(user));
                console.log(photosListLoader);
              }
            }}
            onEndReachedThreshold={0.1}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default React.memo(Detail);
