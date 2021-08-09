/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFangdajing from './IconFangdajing';
import IconMusic from './IconMusic';
import IconMy from './IconMy';
import IconMusicNoteIi from './IconMusicNoteIi';
import IconMusic1 from './IconMusic1';
import IconSearch from './IconSearch';
import IconMy1 from './IconMy1';
import IconHome from './IconHome';
import IconCartEmpty from './IconCartEmpty';
import IconHome1 from './IconHome1';
import IconHomehomepagemenu from './IconHomehomepagemenu';

export type IconNames = 'icon-fangdajing' | 'icon-music' | 'icon-My' | 'icon-MusicNoteII' | 'icon-music1' | 'icon-my' | 'icon-search' | 'icon-my1' | 'icon-home' | 'icon-cart-Empty' | 'icon-home1' | 'icon-Homehomepagemenu';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-fangdajing':
      return <IconFangdajing key="1" {...rest} />;
    case 'icon-music':
      return <IconMusic key="2" {...rest} />;
    case 'icon-My':
      return <IconMy key="3" {...rest} />;
    case 'icon-MusicNoteII':
      return <IconMusicNoteIi key="4" {...rest} />;
    case 'icon-music1':
      return <IconMusic1 key="5" {...rest} />;
    case 'icon-my':
      return <IconMy key="6" {...rest} />;
    case 'icon-search':
      return <IconSearch key="7" {...rest} />;
    case 'icon-my1':
      return <IconMy1 key="8" {...rest} />;
    case 'icon-home':
      return <IconHome key="9" {...rest} />;
    case 'icon-cart-Empty':
      return <IconCartEmpty key="10" {...rest} />;
    case 'icon-home1':
      return <IconHome1 key="11" {...rest} />;
    case 'icon-Homehomepagemenu':
      return <IconHomehomepagemenu key="12" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
