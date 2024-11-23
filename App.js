import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.continue}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  continue:{
    flex:1,
    backgroundColor:"tomato"
  },
  city:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  cityName:{
    fontSize:68,
    fontWeight:500
  },

  weather:{
    flex:3,
  },

  day:{
    flex:1,
    alignItems:"center"
  },

  temp:{
    fontSize:124,
    marginTop:10
  },

  description:{
    fontSize:40,
    marginTop:-30
  }
})