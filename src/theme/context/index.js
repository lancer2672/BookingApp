import AsyncStorage from '@react-native-async-storage/async-storage';
import {darkThemeColors, whiteThemeColors} from '@src/theme/color';
import {createContext, useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';

export const ThemeContext = createContext();

export default function ThemeProviderComponent({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    (async () => {
      const isUseDarkTheme = await AsyncStorage.getItem('AppTheme');
      if (isUseDarkTheme == 'dark') {
        setIsDarkTheme(true);
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkThemeColors : whiteThemeColors}>
      <ThemeContext.Provider value={{isDarkTheme: isDarkTheme, setIsDarkTheme}}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
