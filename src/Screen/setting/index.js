import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../Utils/Style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {OptionList} from './components'
import settingStyles from './style';
import CommonButton from '../../Components/CommonButton';
import { SignOut } from '../../Utils/CommonAuthFun';
const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={{...styles.headerView,paddingLeft:10,paddingRight:100}}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name={'arrow-back'}
          size={35}
        />
      </View>
      <View >
        <OptionList optionText={'Profile'}/>
        <OptionList optionText={'Help & Support'} />
        <OptionList optionText={'Notifications'}/>
      </View>
      <CommonButton onPressFun={()=>SignOut()} style={settingStyles.buttonStyle} label={'Log Out'} textStyle={settingStyles.btnText}/>

      <Text>App Version</Text>
      <Text>1.0.0</Text>

    </View>
  );
};

export default SettingScreen;
