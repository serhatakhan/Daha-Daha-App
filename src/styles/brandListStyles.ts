import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  selectedContainer: {
    borderColor: Colors.ActiveDot,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.White,
    borderColor: Colors.TabBorder,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 6,
    paddingRight: 12,
  },
  imageContainer: {
    width: 'auto',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 13.8,
    color: Colors.TabActive,
  },
});

export default styles;
