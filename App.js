import {Button, Text, View} from 'react-native';
import React from 'react';

const hello = () => {
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue'}}>
        Hello React Native
      </Text>
      <Button title="Click me" onPress={() => alert('Hello')} />
    </View>
  );
};

export default hello;
