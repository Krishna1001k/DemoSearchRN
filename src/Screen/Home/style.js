import {StyleSheet, Dimensions} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import {color} from '../../Utils/color';
const {height, width} = Dimensions.get('screen');

const HomeStyle = StyleSheet.create({
  searchView: {
    height: height /7 ,
    width: width,
    // paddingHorizontal:20,
    justifyContent:'space-between',
    backgroundColor: color.primaryWhite,
    paddingBottom: 5,

  },
  search: {
   height:height/20,
   marginHorizontal:20,
    backgroundColor: '#EFFFFD',
    borderWidth: 0.41,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  recentSearchView:{
    height:height/30,
    // alignItems:'center',
    justifyContent:'center',
    marginVertical:5,
    borderRadius:20,
    marginHorizontal:5,
    paddingVertical:5,
    paddingHorizontal:10,

    backgroundColor:'black'
  },
  recentSearchText:{
    color:color.primaryWhite,
    fontWeight:'400',
    fontSize:16,
  },
  recentSearchHeaderText:{
    fontSize:15,
    marginLeft:20,
    marginVertical:5,
    fontWeight:'400',
  }

});

export default HomeStyle;
