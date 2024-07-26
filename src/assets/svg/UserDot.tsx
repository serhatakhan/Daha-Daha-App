import React from 'react';
import Svg, {Circle} from 'react-native-svg';

const UserDotSvg: React.FC = () => (
  <Svg
    width="12"
    height="12"
    viewBox="0 0 16 16"
    fill="none">
    <Circle
      cx="8"
      cy="8"
      r="6"
      fill="#009639"
      stroke="white"
      stroke-width="2.18182"
    />
  </Svg>
);

export default UserDotSvg;
