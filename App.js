import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Mainscreen from './component/Mainscreen'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Mainscreen/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
