//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,StatusBar} from 'react-native';
import Mainscreen from './component/Mainscreen'
import Addpatient from './component/AddPatientscreen'
import Adddonar from './component/AddDonarscreen'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>

      <Stack.Navigator initialRouteName="Home"
      headerMode={
        false
      }
       >
        <Stack.Screen name="Home" component={Mainscreen} />
        <Stack.Screen name="Patient" component={Addpatient} />
        <Stack.Screen name="Donar" component={Adddonar}/>
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },
});
