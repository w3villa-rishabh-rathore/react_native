import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '../utils/Colors';
import { ThemeContext } from '../Context/ThemeContext';

const Button = ({ title, type, onPress }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            currentTheme === 'dark'
              ? type === 'top'
                ? Colors.btnLight
                : type === 'right'
                ? Colors.btnRight
                : Colors.btnDarks
              : type == 'top'
              ? Colors.btnDarks
              : type == 'right'
              ? Colors.btnRight
              : Colors.btnLight,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 34,
          color:
            currentTheme === 'dark'
              ? type === 'top'
                ? Colors.black
                : Colors.white
              : type == 'number'
              ? Colors.black
              : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.btnDarks,
  },
});
