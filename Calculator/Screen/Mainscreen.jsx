import { StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Calcultor from '../Components/Calcultor';
import { ThemeContext } from '../Context/ThemeContext';
import {Colors} from '../utils/Colors'


const Mainscreen = () => {
  const {currentTheme} =  useContext(ThemeContext);

  return (
    <>
    <StatusBar
      backgroundColor={currentTheme === 'dark' ? Colors.dark : Colors.light} // Android background
      barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}  // Text/icon color for both platforms
    />
      <Calcultor />
    </>
  );
};

export default Mainscreen;
