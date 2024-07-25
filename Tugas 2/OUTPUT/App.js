// import FormRCC from "./components/FormRCC";
// import FormRFC from "./components/FormRFC";

// export default function App() {
//   return <FormRFC/>
// }
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Latihan1 from './components/Soal1&2';
import Latihan3 from './components/Soal3';
import Latihan4rfc from './components/Soal4RFC';
import Latihan4rcc from './components/Soal4RCC';

export default function App() {
  return (
    <View style={styles.container}>
      <Latihan1 />
      {/* <Latihan3 /> */}
      {/* <Latihan4rfc /> */}
      {/* <Latihan4rcc /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple', 
    //buat latihan 3 pakai background color tapi buat latihan 1 gak dibutuhkan background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});
