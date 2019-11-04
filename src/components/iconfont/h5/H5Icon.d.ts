/* eslint-disable */

import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';

interface Props extends DOMAttributes<SVGElement> {
  name: 'nan' | 'jia' | 'jiantou';
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

declare const H5Icon: FunctionComponent<Props>;

export = H5Icon;
