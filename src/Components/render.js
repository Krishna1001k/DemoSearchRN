import {
  View,Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useRef} from 'react';
import styles from '../Utils/Style';
import {useDispatch, useSelector} from 'react-redux';
import ApiCall from '../Redux/Home/action';
import {useNavigation} from '@react-navigation/native';
import detailStyle from '../Screen/Detail/style';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { SocailView } from '../Utils/CommonFuntions';
const Render = props => {

  const navigation = useNavigation();
  const [isloading, setIsLoading] = useState(true);
  const {Page, myText} = useSelector(store => store.HomeReducer);
  const dispatch = useDispatch();

  const DispatchFun=()=>{
    dispatch({type: 'PAGE', payload: {Page: Page + 1}})
    dispatch(ApiCall(myText,(value)=>setIsLoading(value)))
  }


 
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


          {/* {item.tags.length>1&&<Text>{`#${item.tags[1].title}`}</Text>} */}
          
          {/* <SocailView label='logo-instagram' Icon={Ionicon} socialName={item.user.social.instagram_username}/> */}
          
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
          ((isloading===false)?<ActivityIndicator size={'large'} color='grey'/>:<View></View>)
        }
        onEndReached={() => {isloading? DispatchFun():dispatch(ApiCall(myText,(value)=>setIsLoading(value)))}
      }
        ref={props.reff}
        onEndReachedThreshold={0.8}
      />
    
    </View>
  );
};

export default Render;
