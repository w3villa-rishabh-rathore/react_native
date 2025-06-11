import React from 'react'
import {
  View ,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'
import Flatcard from './components/Flatcard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';
import ActionCard from './components/ActionCard';


function App(){
  return (
    <SafeAreaView>
      <ScrollView>      
      <Flatcard/>
      <ElevatedCard/>
      <FancyCard/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
    )
}

export default App;