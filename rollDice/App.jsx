import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import React, { useState } from 'react'
import img1 from './assets/One.png'
import img2 from './assets/Two.png'
import img3 from './assets/Three.png'
import img4 from './assets/Four.png'
import img5 from './assets/Five.png'
import img6 from './assets/Six.png'


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};



export default function App() {

  const [image, setImage] = useState(img1);


  function diceroll() {

      ReactNativeHapticFeedback.trigger("rigid", options);


    let num = Math.floor((Math.random()*5));
    switch (num) {
      case 1: setImage(img1);
              break;
      case 2: setImage(img2);
              break;
      case 3 : setImage(img3);
              break;
      case 4 : setImage(img4);
              break;
      case 5 : setImage(img5);

      default: setImage(img6);
        break;
    }

  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Roll Dice</Text>
      <View style={styles.imageContainer}>
          <Image source={image}/>
      </View>
      <TouchableOpacity onPress={()=>{
        diceroll();

      }} >
          <Text style={styles.primarybtn}>
            Roll Dice
          </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex : 1 ,
      justifyContent : 'center',
      alignItems : 'center'
    },
    heading : {
      fontSize : 24,
      fontWeight : 'bold',
      padding : 20,
    },
    primarybtn : {
      backgroundColor : 'blue',
      color : 'white',
      padding : 10 ,
      fontSize : 20,
      borderRadius : 8,
      fontWeight : '600'
    }

})