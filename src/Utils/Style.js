import { StyleSheet,Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { color } from './color';
const StatusBarHeight=getStatusBarHeight();
const {height,width}=Dimensions.get('screen')
const styles = StyleSheet.create({

    main:{
        flex:1,
        paddingTop:StatusBarHeight,
       
        alignItems:'center'
    },
    flatListView:{
        height: height/1.26,
        width: width/1.1,
    },
    cards:{
        marginVertical:15,
        height: height/4,
        backgroundColor:color.lightGrey,
        alignItems:'center',
        borderRadius:10,
        overflow: 'hidden',
    },
    cardsImage:{
        height: '100%',
        width: '100%',
        resizeMode:'cover',
    },
    cardHeaderText:{
        fontSize:20,
        fontWeight:'700',
    },
    btnSty:{
        backgroundColor:color.lightAqua,
        height: '6%',
        width:'20%',
        zIndex: 1,
        position:'absolute',
        bottom:10,
        right:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    }    
})

export default styles