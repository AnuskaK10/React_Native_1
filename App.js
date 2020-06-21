import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });

  const clickHandler = () => {
    setName('chun-li');
    setPerson({ name: 'luigi', age: 45 });
  };

  return (
    <View style={styles.container}>
      <Text>
        Enter name:
      </Text>
      <TextInput
      onChangeText  
      style={styles.input}/>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />  
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
  input :{
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    width:200,
    padding:20,
  }
});
