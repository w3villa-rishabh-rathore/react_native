import { Linking, StyleSheet, Text, View  , Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.card , styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>
                What's new in JS 21 - ES12
            </Text>
        </View>
        <Image source={{
            uri : 'https://campus.epam.com/static/plan/4462/selfstudy03375353.png'
        }}  style={styles.image}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus necessitatibus sapiente totam impedit, pariatur voluptates quidem? Unde sapiente non nihil distinctio odit aliquam, tempora, dolorum, rem cum nemo neque rerum?                
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/update-javascript-files.html')}>
                <Text style={styles.link}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 10
    },
    card : {
        width : '400',
        height : '380',
        borderRadius : 10,
        marginVertical : 12,
        marginHorizontal : 16
    } ,
    elevatedCard : {
        backgroundColor : '#E07C24',
        elevation : 3,
        shadowOffset  :{
            width : 1,
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.4
    } ,
    headingContainer : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
   } ,
    headingText : {
        color : '#000',
        fontSize : 16 ,
        fontWeight : '600'
    },
    image : {
        height : 190,
        backgroundColor : 'gray'
    },
    bodyContainer :{
        padding : 10,

    },
    footerContainer : {
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    link :{
        fontSize : 16,
        color : '#000000',
        backgroundColor : "white",
        paddingHorizontal : 20,
        paddingVertical : 2,
        borderRadius : 4
    }
    
}) 