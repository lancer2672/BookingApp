export const generalColor = {
  primary: '#091E3D',
  strongprimary: '#040f1f',
  secondary: '#747268',
  white: {
    100: '#fff',
    50: '#f5f5f5',
    25: '#e0e0e0',
    10: '#D5D5D5',
  },
  black: {
    100: '#000',
    50: '#333',
    25: '#666',
    10: '#bdbbbb',
  },
  other: {
    yellow: '#FFD700',
    star: '#FFD700',
    bluepurple: '#514eb6',
    darkblue: '#0b0c15',
    gray: '#747268',
    lightgray: '#F0F0F1CC',
    stronggray: '#4C4C4C',
  },
  status: {
    canceled: '#FF6347',
    notCheckedIn: '#FFD700',
    notCheckedOut: '#1E90FF',
    checkedOut: '#32CD32',
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
    primary: '#747268',
    secondary: '#5068f2',
    error: '#b85454',
    success: '#138000',
  },
};

export const darkThemeColors = {
  ...generalColor,
  bg: {
    primary: '#777',
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
