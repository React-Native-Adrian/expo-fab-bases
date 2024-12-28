import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FAB } from './src/components/FAB';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
      <FAB
        label="Reset"
        position="left"
        onPress={() => setCount(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

// casi como CSS para el estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 72,
    fontWeight: '100',
  },
});
