import { StyleSheet,Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { color } from './color';
const StatusBarHeight=getStatusBarHeight();
const {height,width}=Dimensions.get('screen')
const styles = StyleSheet.create({

    main:{
        backgroundColor:color.primary,
        flex:1,
        paddingTop:StatusBarHeight,
        alignItems:'center',
    },
    flatListView:{
        height: height/1.22,
        width: width/1,
        backgroundColor:color.primaryWhite,
        paddingHorizontal:20,
    },
    cards:{
        flexDirection:'row',
        marginVertical:15,
        height: height/8,
        backgroundColor:color.primary,
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:10,
        overflow: 'hidden',

    },
    cardImage:{
        height:'80%',
        width: '35%',
        borderRadius:10,
        resizeMode:'cover'
    },
    profileImage:{
        height: 95,
        width: '24%',
        borderRadius:50,
        position: 'relative',
        top:40,
        zIndex:1,
        resizeMode:'cover',
    },
    cardHeaderText:{
        fontSize:20,
        fontWeight:'700',
    },
    userDetailView:{
        width:'55%',
        height: '80%',
        alignItems:'center',
        // justifyContent:'space-around',
        paddingHorizontal:10,
        // backgroundColor:'red'
    },
    userNameText:{
        fontSize:20,
        fontWeight:'700',
        marginVertical:5,
    },

    numberText:{
        fontWeight:'700',
    },
    rating:{
       height:'90%',
       width:'30%',
       justifyContent:'space-around',
       alignItems:'center',
       marginVertical:4,
       paddingVertical:4,


    },
    ratingView:{
        flexDirection:'row',
        width:width,
        height:'35%',
        paddingHorizontal:50,
        justifyContent:'space-around',
        
    },
    locationText:{
        color:'grey',
        fontWeight:'600',
        marginVertical:5,
    },

    innerCard:{
        // flexDirection:'row',
        // paddingHorizontal:10,
        // paddingTop:24,
        marginTop:100,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        height: "80%",
        width: '90%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor:'#E4FBFF'
    },
    social:{
        flexDirection:'row',
        width:'70%',
        marginVertical:3,
    },
    socialText:{
        marginLeft:5,
        fontSize:15,
        fontWeight:'600',
    },
    hashTagText:{
        color:'blue',
        marginVertical:8,
    },
    btnSty:{
        backgroundColor:color.primaryWhite,
        height: '7%',
        width:'16%',
        zIndex: 1,
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
   

})

export default styles