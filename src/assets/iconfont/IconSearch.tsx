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

let IconSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.333333 853.333333a384 384 0 1 1 384-384 384 384 0 0 1-384 384z m0-682.666666a298.666667 298.666667 0 1 0 298.666667 298.666666 298.666667 298.666667 0 0 0-298.666667-298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M896 938.666667a42.666667 42.666667 0 0 1-30.293333-12.373334l-185.6-185.6a42.666667 42.666667 0 1 1 60.586666-60.586666l185.6 185.6a42.666667 42.666667 0 0 1 0 60.586666A42.666667 42.666667 0 0 1 896 938.666667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSearch.defaultProps = {
  size: 18,
};

IconSearch = React.memo ? React.memo(IconSearch) : IconSearch;

export default IconSearch;
