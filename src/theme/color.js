export const generalColor = {
  white: {
    100: '#fff',
    50: '#f5f5f5',
    25: '#e0e0e0',
    10: '#d3d3d3',
  },
  black: {
    100: '#000',
    50: '#333',
    25: '#666',
    10: '#bdbbbb',
  },
  other: {
    yellow: '#e1fa25',
    bluepurple: '#514eb6',
  },
  error: 'tomato',
};

export const whiteThemeColors = {
  ...generalColor,
  bg: {
    primary: '#f6f9ff',
    secondary: '#3498db',
    tertiary: '#3c50c7',
  },
  text: {
    primary: '#000000',
    secondary: '#5068f2',
    error: '#b85454',
    success: '#138000',
  },
};

export const darkThemeColors = {
  ...generalColor,
  bg: {
    primary: '#000',
    secondary: '#1c1c1c',
    tertiary: '#3c50c7',
  },
  text: {
    primary: '#fff',
    secondary: '#5068f2',
    error: '#b85454',
    success: '#138000',
  },
};
