import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    position: 'absolute',
    top: 74,
  },
  carousel: {
    position: 'relative',
    top: 130,
    height: 406,
  },
  paginationContainer: {
    position: 'absolute',
    top: 410,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 19,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.ActiveDot, // Aktif dot rengi
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.InactiveDot, // İnaktif dot rengi
  },
});

export default styles;
