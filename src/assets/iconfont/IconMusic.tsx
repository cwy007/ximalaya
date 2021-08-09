/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconMusic: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1023.961881 64.036987c0-43.419232-42.199253-74.01869-83.198528-61.01892L300.794677 192.014722c-26.599529 8.399851-44.799207 32.999416-44.799207 60.998921v522.830748c-20.099644-4.759916-41.439267-7.839861-63.998867-7.839861-106.038124 0-191.996603 57.298986-191.996603 127.997735s85.958479 127.997735 191.996603 127.997735 191.996603-57.298986 191.996602-127.997735V428.630535l511.99094-150.037345v369.253466c-20.099644-4.759916-41.439267-7.839861-63.998867-7.839861-106.038124 0-191.996603 57.298986-191.996603 127.997735s85.958479 127.997735 191.996603 127.997735 191.996603-57.298986 191.996602-127.997735l-0.019999-703.967543z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMusic.defaultProps = {
  size: 18,
};

IconMusic = React.memo ? React.memo(IconMusic) : IconMusic;

export default IconMusic;
