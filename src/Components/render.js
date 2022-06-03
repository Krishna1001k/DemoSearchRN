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

const rendring = (item, navigation) => {

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detail', item)}
      activeOpacity={0.7}
      style={styles.cards}>
      <Text style={styles.cardHeaderText}>{item.user.name}</Text>
      <Image style={styles.cardsImage} source={{uri: item.urls.small}} />
    </TouchableOpacity>
  );
};

const Render = props => {
  const navigation = useNavigation();
  const [isloading, setIsLoading] = useState(true);
  const [footerloading, setFooterLoading] = useState(true);
  const reff=useRef(null);
  const {Page, myText} = useSelector(store => store.HomeReducer);
  const dispatch = useDispatch();


  return (
    <View style={styles.flatListView}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => rendring(item, navigation)}
        ListFooterComponent={
          ((isloading===false)?<ActivityIndicator size={'large'} color='grey'/>:<View></View>)
        }
        ListEmptyComponent={
          ()=>{
            return(
              <View style={styles.main}>
                <ActivityIndicator size="large" color="grey" />
                </View>
            )
          }
        }
        onEndReached={() => {
          if (isloading) {
            dispatch({type: 'PAGE', payload: {Page: Page + 1}});
            dispatch(
              ApiCall(
                myText,
                value => {
                  console.log(value);
                  setIsLoading(value);
                },
                value => {
                  console.log(value);
                  setIsLoading(value);
                },
              ),
            );
          } else {
            dispatch(
              ApiCall(
                myText,
                value => {
                  console.log(value);
                  setIsLoading(value);
                },
                value => {
                  console.log(value);
                  setIsLoading(value);
                },
              ),
            );
          }
        }}
        ref={reff}
        onEndReachedThreshold={0.8}
      />
      <TouchableOpacity style={styles.btnSty} onPress={()=>{
        reff.current.scrollToOffset({offset:0});
      }}>
        <Text>GoTop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Render;
