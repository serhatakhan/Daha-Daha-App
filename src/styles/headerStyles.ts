import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: 40,
    paddingTop: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotContainer: {
    position: 'absolute',
    zIndex: 10,
    right: 14,
    top: -3,
    borderWidth: 2.18,
    borderColor: Colors.White,
    borderRadius: 50,
    width: 12,
    height: 12,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
