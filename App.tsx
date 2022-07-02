import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#4e0027', '#ddb52f']}>
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
