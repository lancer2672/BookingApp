import Svg, {Path} from 'react-native-svg';

export const ClockSVG = ({width = 18, height = 18, color = '#747268'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 4.5V9L12 10.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PinSVG = ({width = 25, height = 29, color = 'white'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M24 12.0455C24 20.6364 12.5 28 12.5 28C12.5 28 1 20.6364 1 12.0455C1 9.11602 2.2116 6.30656 4.36827 4.23514C6.52494 2.16371 9.45001 1 12.5 1C15.55 1 18.4751 2.16371 20.6317 4.23514C22.7884 6.30656 24 9.11602 24 12.0455Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 15.7273C14.6171 15.7273 16.3334 14.0789 16.3334 12.0455C16.3334 10.0121 14.6171 8.36365 12.5 8.36365C10.3829 8.36365 8.66669 10.0121 8.66669 12.0455C8.66669 14.0789 10.3829 15.7273 12.5 15.7273Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MapSVG = ({width = 17, height = 20, color = '##747268'}) => (
  <Svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.875 5.25V19.25L7 15.75L14 19.25L20.125 15.75V1.75L14 5.25L7 1.75L0.875 5.25Z"
      fill={color}
    />
  </Svg>
);

export const TargetSVG = ({width = 21, height = 20, color = '#747268'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M9.34089 18.3333C14.1176 18.3333 17.9899 14.6024 17.9899 9.99999C17.9899 5.39762 14.1176 1.66666 9.34089 1.66666C4.56418 1.66666 0.691895 5.39762 0.691895 9.99999C0.691895 14.6024 4.56418 18.3333 9.34089 18.3333Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.9899 10H14.5303"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.15149 10H0.691895"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.34088 4.99999V1.66666"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.34088 18.3333V15"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
