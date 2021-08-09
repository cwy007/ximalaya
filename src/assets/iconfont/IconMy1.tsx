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

let IconMy1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M505.415111 597.333333h13.169778l19.399111 0.184889 19.157333 0.369778 12.615111 0.369778 12.501334 0.455111 12.359111 0.568889 6.115555 0.327111 12.16 0.711111 12.003556 0.839111 11.847111 0.938667 11.676445 1.038222 11.52 1.166222 11.335111 1.28 5.603555 0.682667 11.079111 1.450667 5.461334 0.782222 10.780444 1.635555 10.581333 1.777778 10.368 1.891556 10.168889 2.033777c5.020444 1.038222 9.955556 2.133333 14.819556 3.285334l9.6 2.375111 9.372444 2.503111c1.536 0.426667 3.072 0.853333 4.593778 1.308444l9.002667 2.716445C861.155556 652.700444 910.222222 694.442667 910.222222 760.888889c0 81.692444-59.975111 128.426667-153.272889 153.272889l-9.770666 2.488889-9.998223 2.346666-5.077333 1.109334-10.339555 2.119111-5.248 0.995555-10.652445 1.905778-5.404444 0.896-10.951111 1.692445-11.164445 1.564444-11.335111 1.422222-5.745778 0.654222-11.605333 1.237334-11.790222 1.109333-11.946667 0.995556-12.117333 0.853333-12.259556 0.753778c-2.048 0.128-4.124444 0.227556-6.186667 0.341333l-12.472888 0.583111-12.615112 0.483556-12.743111 0.384-19.342222 0.384-19.598222 0.170666h-13.169778l-19.598222-0.170666-19.342222-0.384-12.743111-0.384-12.615112-0.483556-12.472888-0.583111-12.344889-0.711111a1220.167111 1220.167111 0 0 1-6.115556-0.384l-12.088889-0.853333-11.960889-0.995556-11.790222-1.109333-11.605333-1.237334-11.434667-1.351111a842.097778 842.097778 0 0 1-5.646222-0.739555l-11.164445-1.550222-10.951111-1.692445c-1.806222-0.284444-3.612444-0.597333-5.404444-0.896l-10.666667-1.905778-10.424889-2.033777c-3.456-0.711111-6.855111-1.436444-10.24-2.190223l-9.984-2.346666-9.770666-2.488889C173.752889 889.315556 113.777778 842.581333 113.777778 760.888889c0-64.568889 46.364444-105.827556 120.988444-130.744889l8.917334-2.858667c7.537778-2.318222 15.317333-4.48 23.367111-6.499555l9.770666-2.346667c3.285333-0.768 6.627556-1.493333 9.998223-2.218667l10.225777-2.062222 10.439111-1.948444 5.304889-0.910222 10.752-1.749334 10.951111-1.607111 11.164445-1.493333 11.335111-1.365334 5.745778-0.64 11.605333-1.180444 5.873778-0.568889 11.875555-0.995555 12.017778-0.910223 12.188445-0.782222 12.344889-0.682667 12.472888-0.568888 12.615112-0.483556 19.157333-0.526222 12.928-0.227556L505.415111 597.333333zM512 85.333333c125.681778 0 227.555556 101.873778 227.555556 227.555556s-101.873778 227.555556-227.555556 227.555555-227.555556-101.873778-227.555556-227.555555S386.318222 85.333333 512 85.333333z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconMy1.defaultProps = {
  size: 18,
};

IconMy1 = React.memo ? React.memo(IconMy1) : IconMy1;

export default IconMy1;
