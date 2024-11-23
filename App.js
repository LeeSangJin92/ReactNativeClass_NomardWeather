import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const {width:SCREEN_WIDTH} = Dimensions.get("window");

export default function App() {

  return (
    <View style={styles.continue}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
      horizontal 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // 앱 컨터이너
  continue:{
    flex:1,
    backgroundColor:"tomato"
  },

  // 날씨 체크 기준이 되는 도시 박스 Layout
  city:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  // 날씨 체크 기준이 되는 도시 이름 Text
  cityName:{
    fontSize:68,
    fontWeight:500
  },

  // 날씨가 표시되는 Layout ( ScrollView )
  weather:{
  },

  day:{
    width:SCREEN_WIDTH,
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