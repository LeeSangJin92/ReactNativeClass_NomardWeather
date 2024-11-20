import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    // ✏️ 스타일 관련 코드
    <View style={styles.container}>
      <Text style={styles.text}>스타일 지정하는 방법</Text>
      
      {/* 1) style 속성에 직접적으로 스타일 코드 입력하는 방법 */}
      <Text style={{
        fontSize:30,
        color:"red",
      }}>- 📕 첫번째 -</Text>
      
      {/* 2) 스타일 코드가 입려된 컴포넌트 호출하는 방법 */}
      <Text style={styleCode.text}>- 📗 두번째 -</Text>

      {/* 3) 2번째 방법과 동일하지만 StyleSheet.create를 활용한 방법 */}
      <Text style={styles.text}>- 📘 세번째 -</Text>

      {/* 
          🔍 아래 StatusBar는 핸드폰에서 상단에 표시되는 상태바를 
          의미하며 현재 핸드폰에 상태 데이터를 주고 받을때 활용됨. 
      */}
      <StatusBar style="auto" />
    </View>
  );
}

// 📗 2번째 방법의 스타일 코드
const styleCode = {
  text:{
    fontSize:30,
    color:"green"
  }
};

// 📘 3번쨰 방법의 스타일 코드
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  }
});

/* 🔍2번째와 3번째 방법의 차이점 
  2번째와 3번째 차이점은 3번째 방법은 스타일 코드를
  입력 시 자동완성 기능이 있어서 코드 입력 시 효율적으로
  스타일 코드를 작성할 수 있음 
*/
