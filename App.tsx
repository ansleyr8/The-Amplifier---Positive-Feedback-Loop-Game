import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [value, setValue] = useState(1);

  const amplify = () => {
    setValue(value * 2);
  };

  const reset = () => {
    setValue(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amplifier Game</Text>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={amplify}>
        <Text style={styles.buttonText}>Amplify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#CFFF81',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 72,
    color: '#FFF',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#CFFF81',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    fontSize: 24,
    color: '#222',
    fontWeight: 'bold',
  },
});
