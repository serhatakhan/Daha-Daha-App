import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1.5,
    width: '100%',
    borderColor: Colors.TabBorder,
    shadowColor: Colors.Black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 6,
  },
  tabContent: {
    flex: 1,
    height: 68,
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: 'Helvetica',
    paddingTop: 3,
    lineHeight: 11.5,
    letterSpacing: 0.5,
  },
});

export default styles;
