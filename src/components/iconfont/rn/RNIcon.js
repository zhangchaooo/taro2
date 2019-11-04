/* eslint-disable */

import { Svg, Path } from 'react-native-svg/lib/commonjs';


// If you don't want to make all icons in one file,
// try to set generate_mode to "depends-on" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const RNIcon = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'nan':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M954.418 135.399c0.093-9.733-3.424-19.304-9.797-26.662-6.823-7.866-16.619-12.837-26.993-13.695-0.143-0.016-0.289-0.029-0.432-0.044L684.744 78.163c-22.091-1.596-41.315 15.019-42.918 37.12-1.602 22.105 15.019 41.32 37.124 42.922l144.701 10.482L651.691 339.99c-61.707-55.677-143.442-89.573-233.098-89.573-192.249 0-348.093 155.845-348.093 348.09s155.845 348.091 348.093 348.091c192.243 0 348.087-155.846 348.087-348.091 0-73.632-22.859-141.916-61.868-198.156l161.967-161.355-9.13 130.178c-1.553 22.105 15.116 41.282 37.222 42.834 0.955 0.063 1.905 0.099 2.851 0.099 20.881 0 38.499-16.169 39.983-37.32l16.624-236.958C954.384 137.021 954.408 136.206 954.418 135.399 954.423 135.104 954.418 135.536 954.418 135.399L954.418 135.399zM665.416 702.739c-13.489 31.883-32.813 60.534-57.436 85.16-24.623 24.623-53.272 43.946-85.159 57.436-32.969 13.94-68.036 21.011-104.233 21.011-36.194 0-71.258-7.07-104.228-21.011-31.888-13.489-60.537-32.813-85.161-57.436-24.627-24.626-43.95-53.277-57.435-85.16-13.945-32.969-21.013-68.042-21.013-104.232 0-36.192 7.068-71.259 21.013-104.229 13.485-31.887 32.808-60.537 57.435-85.164 24.624-24.624 53.273-43.947 85.161-57.431 32.97-13.945 68.034-21.014 104.228-21.014 36.197 0 71.264 7.068 104.233 21.014 31.887 13.484 60.536 32.808 85.159 57.431 24.623 24.627 43.946 53.277 57.436 85.164 13.945 32.971 21.014 68.037 21.014 104.229C686.43 634.697 679.361 669.771 665.416 702.739L665.416 702.739zM665.416 702.739"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );
    case 'jia':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M768 490.666667H533.333333V256c0-12.8-8.533333-21.333333-21.333333-21.333333s-21.333333 8.533333-21.333333 21.333333v234.666667H256c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333333h234.666667v234.666667c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333333-21.333333V533.333333h234.666667c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333zM512 0C228.266667 0 0 228.266667 0 512s228.266667 512 512 512 512-228.266667 512-512S795.733333 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
            fill={getIconColor(color, 0, '#666767')}
          />
        </Svg>
      );
    case 'jiantou':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M346.52382345477406 104.43830532674417c-12.257495055447652-12.257495055447652-30.6437359627898-12.257495055447652-42.90123101823747 0s-12.257495055447652 30.6437359627898 0 42.90123101823747L668.2830560915551 512 303.6225924365366 876.6604636550185c-12.257495055447652 12.257495055447652-12.257495055447652 30.6437359627898 0 42.90123101823747 6.128747527723826 6.128747527723826 15.3218679813949 9.193120453671073 21.450615509118734 9.193120453671073s15.3218679813949-3.064372925947246 21.450615509118734-9.193120453671073l386.1110791641372-386.1110791641372c12.257495055447652-12.257495055447652 12.257495055447652-30.6437359627898 0-42.90123101823747L346.52382345477406 104.43830532674417z"
            fill={getIconColor(color, 0, '#333333')}
          />
        </Svg>
      );

  }

  return null;
};

RNIcon.defaultProps = {
  size: 18,
};

/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
const getIconColor = (color, index, defaultColor) => {
  return color
    ? (
      typeof color === 'string'
        ? color
        : color[index] || defaultColor
    )
    : defaultColor;
};

export default RNIcon;
