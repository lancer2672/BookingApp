export const generalColor = {
  white: {
    100: '#fff',
  },
  black: {
    100: '#000',
  },
  other: {
    yellow: '#e1fa25',
    bluepurple: '#514eb6',
  },
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
