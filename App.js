import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './components/MeuComponente';
import MeuComponente2 from './components/MeuComponente2';
import NumeroAleatorio from './components/NumeroAleatorio';
import DigiteSeuNome from './components/DigiteSeuNome';

export default function App() {
  return (

      <DigiteSeuNome style={styles.container} />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
