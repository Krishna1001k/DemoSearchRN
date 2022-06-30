import { Dimensions,StyleSheet} from 'react-native'
import { color } from '../../Utils/color';
const {height,width}=Dimensions.get('screen')

const settingStyles = StyleSheet.create({

    optionListView:{
        height:height/22,
        width:width/1.1,
        borderRadius:5,
        flexDirection:'row',
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center',
        margin:4,
        backgroundColor:color.lightAqua,
    },

    buttonStyle:{
        height:height/20,
        borderRadius:5,
        width:width/2.8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:color.Button,
        marginVertical:30,
    },
    btnText:{
        fontSize:25,
        fontWeight:'800',
        color:color.primaryWhite
    }

   
})

export default settingStyles;