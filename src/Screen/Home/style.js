import {StyleSheet,Dimensions} from 'react-native'
import { color } from '../../Utils/color'
const {height,width}=Dimensions.get('screen')

const HomeStyle = StyleSheet.create({
    searchView:{
        height:height/20,
        backgroundColor:color.lightGrey,
        width: width/1.1,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:10,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    headerText:{
        fontSize:30,
        fontWeight:'600'
    },
})


export default HomeStyle;