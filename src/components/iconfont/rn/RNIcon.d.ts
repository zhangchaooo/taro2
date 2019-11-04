/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'nan' | 'jia' | 'jiantou';
  size?: number;
  color?: string | string[];
}

declare const RNIcon: FunctionComponent<Props>;

export = RNIcon;
