import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons'
import styles from '../../Utils/Style';
import detailStyle from './style';
import {useRoute, useNavigation} from '@react-navigation/native';
const Detail = () => {
  const [numLine, setNumLines] = useState(2);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const onLoading=(value)=>{
    setLoading(value)
  }

  const {
    params: {urls, user},
  } = useRoute();




  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={detailStyle.backArrowView}
        onPress={() => navigation.goBack()}>
        <Image
          style={detailStyle.backArrow}
          source={require('../../Assets/Imges/icons/left-arrow.png')}
        />
      </TouchableOpacity>

      <Text style={detailStyle.detailText}>User Details</Text>

      {loading && 
      <View>
        <View style={detailStyle.detailView}>
        <ActivityIndicator style={{zIndex:1,position:'absolute',top:100}} size={'large'} color={'grey'}/>

        <Image
          style={styles.cardsImage}
          source={{uri: urls.thumb}}
        />
      </View>
      
      
      <View style={detailStyle.userDtailView}>
        <Text style={styles.cardHeaderText}>{user.name}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setNumLines(0)}>
          <Text numberOfLines={numLine} style={detailStyle.bioText}>
            {user.bio}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      
      }

      {
        <View>
       
        <View style={detailStyle.detailView}>
          <Image
            style={styles.cardsImage}
            source={{uri: urls.full}}
            onLoadStart={() => onLoading(true)}
            onLoadEnd={()=>onLoading(false)}
          />
        </View>
      

      <View style={detailStyle.userDtailView}>
        <Text style={styles.cardHeaderText}>{user.name}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setNumLines(0)}>
          <Text numberOfLines={numLine} style={detailStyle.bioText}>
            {user.bio}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
}
    </View>
  );
};

export default Detail;
