import { View, Text, StyleSheet, TouchableOpacity, Switch, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '../utils/Colors';
import SettingButton from '../Components/SettingButton';
import { ThemeContext } from '../Context/ThemeContext';

const SettingScreen = () => {
  const { currentTheme, toggleTheme, useSystemTheme, isSystemTheme } =
    useContext(ThemeContext);

  return (
    <>
<StatusBar
  backgroundColor={currentTheme === 'dark' ? Colors.dark : Colors.light} // Android background
  barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}  // Text/icon color for both platforms
/>
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentTheme === 'dark' ? Colors.dark : Colors.gray,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: currentTheme === 'dark' ? Colors.white : Colors.black },
        ]}
      >
        Theme Switch
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              currentTheme === 'dark' ? Colors.btnDarks : Colors.white,
          },
        ]}
        onPress={() => {}}
      >
        <Text
          style={{
            color: currentTheme === 'dark' ? Colors.white : Colors.black,
          }}
        >
          Dark Mode
        </Text>
        <Switch
          value={currentTheme === 'dark'}
          onValueChange={() =>
            toggleTheme(currentTheme === 'light' ? 'dark' : 'light')
          }
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          { color: currentTheme === 'dark' ? Colors.white : Colors.black },
        ]}
      >
        Theme Setting
      </Text>
      <SettingButton
        title="Ligth"
        icon="lightbulb-on"
        isActive={!isSystemTheme && currentTheme === 'light'}
        onPress={() => {
          toggleTheme('light');
        }}
      />
      <SettingButton
        title="Dark"
        icon="weather-night"
        isActive={!isSystemTheme && currentTheme === 'dark'}
        onPress={() => {
          toggleTheme('dark');
        }}
      />
      <SettingButton
        title="System"
        icon="theme-light-dark"
        isActive={isSystemTheme}
        onPress={() => {
          useSystemTheme();
        }}
      />
    </View>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.gray,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});
