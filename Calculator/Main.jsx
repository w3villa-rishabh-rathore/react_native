import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mainscreen from './Screen/Mainscreen';
import SettingScreen from './Screen/SettingScreen';
import { Colors } from './utils/Colors';
import  { ThemeContext } from './Context/ThemeContext';

const Stack = createNativeStackNavigator();


const Main = () => {

      const { currentTheme } = useContext(ThemeContext);
    

      useEffect(() => {
      
            console.log("hello form main")
      }, [currentTheme])
      

        console.log(currentTheme);


  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Mainscreen">
          <Stack.Screen
            name="Mainscreen"
            component={Mainscreen}
            options={({ navigation }) => ({
              title: 'Calculator',

              headerStyle : {
                backgroundColor : currentTheme === 'dark' ? Colors.dark : Colors.light,
               },
               headerTitleStyle : {
                color : currentTheme ==='dark' ? Colors.light : Colors.dark,
               },

              headerShown: true,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SettingScreen')}
                  style={{ marginRight: 15 }}
                >
                  <Text style={{ color: currentTheme ==='dark' ? Colors.light : Colors.dark }}>Settings</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{ 
               title: 'Settings',
               headerShown: true,
               
              headerStyle : {
                backgroundColor : currentTheme === 'dark' ? Colors.dark : Colors.light,
               },
               headerTitleStyle : {
                color : currentTheme ==='dark' ? Colors.light : Colors.dark,
               },
                headerTintColor: currentTheme === 'dark' ? Colors.light : Colors.dark,
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Main