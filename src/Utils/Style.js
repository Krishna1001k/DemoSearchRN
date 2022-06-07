import { StyleSheet,Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { color } from './color';
const StatusBarHeight=getStatusBarHeight();
const {height,width}=Dimensions.get('screen')
const styles = StyleSheet.create({

    main:{
        flex:1,
        paddingTop:StatusBarHeight-5,
        alignItems:'center',
    },
    flatListView:{
        height: height/1.22,
        width: width/1,
        backgroundColor:color.primaryWhite,
        paddingHorizontal:20,
    },
    cards:{
        marginVertical:15,
        height: height/4.4,
        backgroundColor:color.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        overflow: 'hidden',
    },
    cardsImage:{
        height: 85,
        width: '25%',
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
    },

    innerCard:{
        // flexDirection:'row',
        paddingHorizontal:10,
        paddingTop:24,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        height: "90%",
        width: '90%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#E4FBFF'
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
    }    
})

export default styles