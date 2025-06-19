import { View, StyleSheet, TextInput , TouchableOpacity , Alert } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { Text } from 'react-native-gesture-handler';
import {Colors} from '../utils/Colors'
import { ThemeContext } from '../Context/ThemeContext';



const OtpValidation = ({navigation}) => {

  const { currentTheme} = useContext(ThemeContext);

  const [OTP, setOTP] = useState(new Array(6).fill(''));
  const inputRef = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...OTP];
      newOtp[index] = text;
      setOTP(newOtp);

      if (index < 5) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace') {
      if (OTP[index] === '') {
        if (index > 0) {
          inputRef.current[index - 1].focus();
        }
      } else {
        const newOtp = [...OTP];
        newOtp[index] = '';
        setOTP(newOtp);
      }
    }
  };


   const handleSubmit = () => {
    const enteredOtp = OTP.join('');
    if (enteredOtp === '111111') {
      navigation.navigate('Mainscreen');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid OTP (try 111111)');
      setOTP(new Array(6).fill(''));
inputRef.current[0].focus();

    }
  };

  return (
    <>
    <View style={[styles.wrraper , {backgroundColor : currentTheme === 'dark' ? Colors.dark : Colors.light} ]}>
    <View style={styles.container}>
      {OTP.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputRef.current[index] = ref)}
        />
      ))}
    </View>
        <TouchableOpacity style={[styles.button , {backgroundColor : currentTheme === 'dark' ? Colors.btnDarks  : Colors.btnLight}]} onPress={handleSubmit}>
            <Text style={[styles.buttonText , { color : currentTheme === 'dark' ? "white" : "black"}]}>Submit</Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

export default OtpValidation;

const styles = StyleSheet.create({
  wrraper: {
       flex: 1,
        justifyContent: 'center',
    alignItems: 'center',
    
  },
  container : {
     flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap : 8,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
  },
   button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
   buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
