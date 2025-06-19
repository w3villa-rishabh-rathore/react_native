import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, useColorScheme } from 'react-native';

export const ThemeContext = createContext({
  isSystemTheme: false,
  currentTheme: 'light',
  toggleTheme: () => {},
  useSystemTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState('light');
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  const colorscheme = useColorScheme();

  useEffect(() => {
    console.log('useeffect');
    const getTheme = async () => {
      try {
        const saveTheme = await AsyncStorage.getItem('theme');
        const systemTheme = await AsyncStorage.getItem('systemtheme');

        console.log(saveTheme + ' ' + systemTheme);

        if (saveTheme === 'light') {
          setTheme(saveTheme);
        } else {
          setTheme(saveTheme);
        }

        if (systemTheme === 'false') {
          setIsSystemTheme(false);
        } else {
          setIsSystemTheme(true);
        }
      } catch (error) {
        console.log('error in loding theme', error);
      }
      r;
    };
    getTheme();
  }, []);

  useEffect(() => {
    console.log('useffectcolorscheme');
    if (colorscheme && isSystemTheme) {
      setTheme(colorscheme);
      AsyncStorage.setItem('theme', colorscheme);
      setIsSystemTheme(true);
      AsyncStorage.setItem('systemtheme', 'true');
    }
  }, [colorscheme]);

  const toggleTheme = async newTheme => {
    console.log('toggleTheme');
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
    setIsSystemTheme(false);
    AsyncStorage.setItem('systemtheme', 'false');

    const systemTheme = await AsyncStorage.getItem('systemtheme');

    console.log(newTheme + ' ' + systemTheme);
  };

  const useSystemTheme = () => {
    console.log('useSystemTheme');

    if (colorscheme) {
      setTheme(colorscheme);
      AsyncStorage.setItem('theme', colorscheme);
      setIsSystemTheme(true);
      AsyncStorage.setItem('systemtheme', 'true');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: Theme,
        toggleTheme,
        useSystemTheme,
        isSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
