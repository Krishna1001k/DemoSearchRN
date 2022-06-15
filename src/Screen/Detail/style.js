import {StyleSheet, Dimensions} from 'react-native';
import { color } from '../../Utils/color';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const StatusBarHeight=getStatusBarHeight();

const {height, width} = Dimensions.get('screen');


const detailStyle = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: StatusBarHeight,
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  detailView: {
    height: '60%',
    width: width / 1.08,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  backArrowView: {
    height: '5%',
    width: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    top: 40,
    zIndex: 1,
  },
  backArrow: {
    height: '60%',
    width: '100%',
    marginRight: 110,
  },

  detailText: {
    fontSize: 30,
    fontWeight: '800',
    position: 'absolute',
    top: 40,
  },
  userDtailView: {
    height: height / 5,
    width: width / 1.1,
    paddingVertical: 50,
    alignItems: 'center',
  },
  bioText: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  activityStyle: {
    position: 'absolute',
    top: 200,
  },
  viewStyle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#E4FBFF',
    paddingHorizontal: 15,
    width: width,
    height: height / 1.18,
    paddingBottom:25,

  },
  detailRatingView: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
    paddingHorizontal: 50,
    marginVertical: 5,
    justifyContent: 'space-around',
  },
  image: {
    height: '100%',
    width: width,
  },
  descriptionView: {
    height: '15%',
    width: width / 1.081,
    // justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
  },
  flatListStyle:{
    backgroundColor:'white',
    width:width/1.09,
    paddingHorizontal:3,

  },
  renderView: {
    backgroundColor: 'lightgrey',
    height:height/5,
    width: width/3.5,
    marginHorizontal:3,
    marginVertical:5,
    overflow: 'hidden',

  },
  renderImage: {
    height:"100%",
    width:'100%',
    borderRadius:5,
    borderWidth:0.3,
  },
});

export default detailStyle;
