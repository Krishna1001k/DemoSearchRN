import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import HomeStyle from '../Screen/Home/style';
const renderRecentSearch = (item) => {
    // console.log('--------->',item);
  return (
    <View style={HomeStyle.recentSearchView}>
      <Text style={HomeStyle.recentSearchText}>{item}</Text>
    </View>
  )
}

export default renderRecentSearch