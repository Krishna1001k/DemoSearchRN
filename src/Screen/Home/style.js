import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../Utils/color';
const {height, width} = Dimensions.get('screen');

const HomeStyle = StyleSheet.create({
  searchView: {
    height: height / 15,
    width: width,
    backgroundColor: color.primaryWhite,
    paddingBottom: 5,
  },
  search: {
    height: '90%',
    backgroundColor: '#EFFFFD',
    borderWidth: 0.41,
    width: '85%',
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
});

export default HomeStyle;
