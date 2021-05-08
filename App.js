//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,StatusBar} from 'react-native';
import Mainscreen from './component/Mainscreen'
import Addpatient from './component/AddPatientscreen'
//import {NavigationContainer} from '@react-navigation/native'
//import {createDrawerNavigator} from '@react-navigation/drawer'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Addpatient/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});
