import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentInput, setCurrentInput] = useState(''); // This is the current input value
  const [name, setName] = useState('')

  const handleSubmit = () => {
    setName(currentInput); // This will set the name to the current input value
  }

  const handlePress = () => {
    setName('');
    setCurrentInput(''); // This will reset the name to an empty string
    console.log(`Name reset!`);
  }

  return (
    <View style={styles.container}>
      
      <Text>What's your name?</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter your name'
        onChangeText={text => setCurrentInput(text)}
        value={currentInput}
      />
      {/* This will display "Hello" and the name if `name` is not empty */}
      <Text style={styles.greeting}>
        {name ? `Hello, ${name}!` : 'Hello!'}
      </Text>
      {name ? 
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: '#888',
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 300,
    alignItems: 'center',
  },
  greeting: {
    color: 'black',
    fontSize: 24,
    marginTop:20,
  },
})