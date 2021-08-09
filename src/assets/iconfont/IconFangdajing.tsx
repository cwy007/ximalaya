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

let IconFangdajing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1004.051948 970.805195L824.519481 797.922078c79.792208-86.441558 132.987013-199.480519 132.987013-325.818182 0-259.324675-206.12987-472.103896-465.454546-472.103896S19.948052 212.779221 19.948052 472.103896c0 259.324675 212.779221 472.103896 472.103896 472.103896 106.38961 0 206.12987-39.896104 285.922078-99.74026l179.532468 179.532468 46.545454-53.194805zM86.441558 472.103896C86.441558 246.025974 265.974026 66.493506 492.051948 66.493506c219.428571 0 405.61039 179.532468 405.61039 405.61039 0 219.428571-179.532468 405.61039-405.61039 405.61039S86.441558 691.532468 86.441558 472.103896z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFangdajing.defaultProps = {
  size: 18,
};

IconFangdajing = React.memo ? React.memo(IconFangdajing) : IconFangdajing;

export default IconFangdajing;
