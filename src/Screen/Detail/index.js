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
import { color } from '../../Utils/color';

const Detail = () => {
  const navigation = useNavigation();
  const animateValue = useState(new Animated.Value(0.01))[0];
  const {photosList, page, photosListLoader} = useSelector(
    store => store.DetailReducer,
  );

  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  const dispatch = useDispatch();

  const {
    params: {user},
  } = useRoute();

  useEffect(() => {
    dispatch(PhotosListApiCall(user));
  }, []);

  return (
    <View style={{...detailStyle.main, paddingTop: 25}}>
      <View
        style={{
          ...styles.headerView,
          paddingTop:10,
          paddingLeft: 10,
          marginVertical: 10,
          paddingRight: 89,
        }}>
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

      {
        <Animated.View
          style={{
            ...styles.headerView,
            // marginTop:10,
            height: 100,
            paddingTop:30,
            paddingLeft: 10,
            paddingRight: 89,
            backgroundColor: '#90C8AC',
            position: 'absolute',
            zIndex: 1,
            opacity: animateValue.interpolate({
              inputRange: [0, 50,60],
              outputRange: [0,0.5 ,1],
              extrapolate: 'clamp',
            }),
          }}>
          <TouchableOpacity
            style={detailStyle.backArrowView}
            onPress={() => {
              dispatch({type: 'INCREASE_PAGE', payload: {page: 1}}),
                dispatch({type: 'ADD_LIST', payload: {photosList: []}}),
                navigation.goBack();
            }}>
            <Ionicons name={'arrow-back'} size={35} />
          </TouchableOpacity>

          <Animated.Text
            style={{
              fontWeight: '700',
              transform: [
                {
                  translateX: animateValue.interpolate({
                    inputRange: [10,  150],
                    outputRange: [-50, -50],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  translateY: animateValue.interpolate({
                    inputRange: [50, 150],
                    outputRange: [40, 4],
                    extrapolate: 'clamp',
                  }),
                },
                {
                  scale: animateValue.interpolate({
                    inputRange: [50, 150],
                    outputRange: [1, 2],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              opacity: animateValue.interpolate({
                inputRange: [110, 121],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            }}>
            {user.name}
          </Animated.Text>
        </Animated.View>
      }

      <Animated.Image
        style={{
          ...detailStyle.profileImage,
          backgroundColor: 'grey',
          zIndex: 1,
          top:80,
          left:145,
          position: 'absolute',
          transform: [
            {
              translateX: animateValue.interpolate({
                inputRange: [0,50 ,100,150],
                outputRange: [0, -35,-70,-110],
                extrapolate: 'clamp',
              }),
            },
            {
              translateY: animateValue.interpolate({
                inputRange: [0,25,50, 100],
                outputRange: [0,-15,-30,-72],
                extrapolate: 'clamp',
              }),
            },
            {
              scale: animateValue.interpolate({
                inputRange: [0,50,150],
                outputRange: [1,0.7,0.5],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
        source={{uri: user.profile_image.large}}
      />
      <Animated.View
        style={{
          ...detailStyle.viewStyle,

          transform: [
            {
              translateY: animateValue.interpolate({
                inputRange: [0,100, 200],
                outputRange: [0,-100,-220],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View style={detailStyle.userDtailView}>
          <Text numberOfLines={1} style={{...styles.cardHeaderText}}>
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
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {y: animateValue}}}],
          //   {useNativeDriver: true,listener:({nativeEvent})=> animateValue.setValue(nativeEvent.contentOffset.y) },
          // ) }
          onScroll = {(event) => Animated.event(
            [{
              nativeEvent: {
                contentOffset: { y: animateValue },
              },
            }],
            {
              useNativeDriver: true,
              listener: ({ nativeEvent }) => animateValue.setValue(nativeEvent.contentOffset.y),
            },
          ).__getHandler()(event)}
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
      </Animated.View>
    </View>
  );
};

export default React.memo(Detail);
