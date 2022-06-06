import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
import { color } from '../../Utils/color';
const detailStyle = StyleSheet.create({
  detailView: {
    height: height / 2.5,
    width: width / 1.1,
    borderRadius:5,
    overflow: 'hidden',
    alignItems:'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  backArrowView:{
      height:'5%',
      width:'10%',
      flexDirection:'row',
   alignItems:'center',
   position: 'absolute',
   left:10,
   top:40,
   zIndex: 1,

  },
  backArrow:{
      height:'60%',
      width:'100%',
      marginRight:110,
    
  },
  detailText:{
      fontSize:20,
      fontWeight:'700'
  },
  userDtailView:{
      height:height/4,
      width:width/1.1,

      borderRadius:10,
      paddingVertical:5,
      paddingHorizontal:15,
      position: 'absolute',
      top:450,
      alignItems:'center',
      backgroundColor:color.lightAqua,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
  },
  bioText:{
      marginVertical:5,
      fontSize:14,
      fontWeight:'500',
  },
  activityStyle:{
    position:'absolute',
    top:100,
  }


});

export default detailStyle;
