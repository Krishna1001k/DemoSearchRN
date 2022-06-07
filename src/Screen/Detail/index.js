import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Utils/Style';
import detailStyle from './style';
import {useRoute, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonRatingView} from '../../Utils/CommonFuntions';

const Detail = () => {
  const [numLine, setNumLines] = useState(2);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    params: {urls, user,alt_description},
  } = useRoute();


  const onLoading = value => {
    setLoading(value);
  };

  const thumbImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image style={detailStyle.image} source={{uri: urls.thumb}} />
        <ActivityIndicator
          style={detailStyle.activityStyle}
          size={'large'}
          color={'grey'}
        />
      </View>
    );
  };

  const fullImageViewFun = () => {
    return (
      <View style={detailStyle.detailView}>
        <Image
          style={detailStyle.image}
          source={{uri: urls.full}}
          onLoadStart={() => onLoading(true)}
          onLoadEnd={() => onLoading(false)}
        />
      </View>
    );
  };



 
  return (
    <View style={detailStyle.main}>
      <TouchableOpacity
        style={detailStyle.backArrowView}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back'} size={35} />
      </TouchableOpacity>

      <Text style={detailStyle.detailText}>Profile Details</Text>

      <Image
        style={styles.cardsImage}
        source={{uri: user.profile_image.large}}
      />
      <View style={detailStyle.viewStyle}>
        <View style={detailStyle.userDtailView}>
          <Text style={styles.cardHeaderText}>{user.name}</Text>
          <Text style={styles.locationText}>{user.location}</Text>

          <View style={detailStyle.detailRatingView}>
            <CommonRatingView numbers={user.total_likes} label={'Likes'} />
            <CommonRatingView numbers={user.total_photos} label={'Photos'} />
            <CommonRatingView
              numbers={user.total_collections}
              label={'Collections'}
            />
          </View>
        </View>
        {loading&&thumbImageViewFun()}{
          fullImageViewFun()
        }
        <View style={detailStyle.descriptionView}>
          <Text>Description</Text>
          <Text style={detailStyle.descriptionText}>{alt_description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
