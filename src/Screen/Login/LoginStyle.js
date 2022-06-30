import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../Utils/color';
const {height, width} = Dimensions.get('screen');

const loginStyles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: '800',
  },
  formContainer: {
    padding: 20,
  },

  btnStyle: {
    height: height / 20,
    width: width / 1.3,
    borderRadius: 25,
    margin: 20,
    backgroundColor: color.Button,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 25,
    color: color.primaryWhite,
    fontWeight: '800',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  bottomTouchableText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#187498',
  },
  loginImageView: {
    marginTop: 50,
    height: height / 5.8,
    width: width / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage: {
    height: height / 6,
    width: width / 2.8,
  },
});

export default loginStyles;
