import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../Context/ThemeContext';

const SettingButton = ({ title, icon, onPress, isActive }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.settingbutton,
        {
          backgroundColor:
            currentTheme === 'dark' ? Colors.btnDarks : Colors.white,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.wrapper}>
        <Icon
          name={icon}
          size={20}
          color={currentTheme === 'dark' ? Colors.white : Colors.black}
        />
        <Text
          style={[
            styles.title,
            { color: currentTheme === 'dark' ? Colors.white : Colors.black },
          ]}
        >
          {title}
        </Text>
      </View>
      <Icon
        name={isActive ? 'check-circle' : 'checkbox-blank-circle-outline'}
        size={20}
        color={
          isActive
            ? Colors.btnRight
            : currentTheme === 'dark'
            ? Colors.white
            : Colors.black
        }
      />
    </TouchableOpacity>
  );
};

export default SettingButton;

const styles = StyleSheet.create({
  settingbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
});
