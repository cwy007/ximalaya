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

let IconHome1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 928V540.416l-49.792 49.792L64 544 512 96l448 448-46.208 46.208L864 540.48V928H160zM512 188.448l-288 287.968V864h128V544h320v320h128V476.448l-288-288zM608 608h-192v256h192v-256z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconHome1.defaultProps = {
  size: 18,
};

IconHome1 = React.memo ? React.memo(IconHome1) : IconHome1;

export default IconHome1;
