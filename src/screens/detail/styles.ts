import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {height, width} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  safeArea: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
  },
  goBack: {
    backgroundColor: Colors.TabActive,
    width: 40,
    height: 40,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  imageContainer: {
    borderBottomLeftRadius: 100,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  image: {
    width: width,
    height: 305,
    borderBottomLeftRadius: 100,
    resizeMode: 'cover',
  },
  brandCircle: {
    position: 'absolute',
    top: 260,
    left: 10,
    // borderWidth: 4,
    // borderColor: Colors.White,
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  day: {
    position: 'absolute',
    top: 265,
    left: 260,
    width: 100,
    height: 30,
    borderRadius: 20,
    backgroundColor: Colors.TabActive,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color: Colors.White,
    fontWeight: '400',
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 13.8,
    letterSpacing: -0.5,
  },
  textSpan: {
    color: Colors.White,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.1,
    letterSpacing: -0.44,
  },
  titleContainer: {
    height: 70,
    width: 345,
    marginTop: 15,
    marginHorizontal: 15,
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 29.9,
    letterSpacing: -0.2,
    color: Colors.TabActive,
  },
  descriptionContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  descriptionTitle: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
    marginBottom: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ActiveDot,
    borderRadius: 50,
  },
  buttonText: {
    position: 'absolute',
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.1,
    color: Colors.White,
    textAlign: 'center',
  },
  gradient: {
    width: width,
    height: height * 0.2,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
