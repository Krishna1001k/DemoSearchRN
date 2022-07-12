import { Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { ApiCall } from '../Redux/Home/action';
import HomeStyle from '../Screen/Home/style';
import { useDispatch } from 'react-redux';


const RenderRecentSearch = (input) => {
    const {item,index,onClickItem=()=>{}}=input
    // console.log('--------->',item);
    // const dispatch=useDispatch();
    const onPressFunction=()=>{
        onClickItem(index)
    }
  return (
    <TouchableOpacity onPress={onPressFunction} style={HomeStyle.recentSearchView}>
      <Text style={HomeStyle.recentSearchText}>{item}</Text>
    </TouchableOpacity>
  )
}

export default RenderRecentSearch