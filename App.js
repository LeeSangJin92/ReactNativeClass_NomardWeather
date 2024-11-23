import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
const {width:SCREEN_WIDTH} = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("loading");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  const ask = async () => {

    // 사용중인 폰 또는 기기에서 위치 기반 권한 허용 요청
    const data = await Location.requestForegroundPermissionsAsync();
    console.log(data);
    const granted = data.granted;
    // granted는 현재 사용 중인 기기에서 위치 기반 권한이 허용되었는지 파악 (false : 허가하지 않음 / true : 허가)
    if(!granted){
      setOk(false);
    }

    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    console.log(latitude, longitude);
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:false});
    setCity(location[0].city||location[0].region);
  }

  useEffect(()=>{
    ask();
  },[])

  return (
    <View style={styles.continue}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
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