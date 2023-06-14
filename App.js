import {Button, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import ExStyles from './style';

const hello = () => {
  return (
    <View>
      <Text style={styles.textBox}>Hello React Native</Text>
      <Button
        style={ExStyles.button}
        title="Click me"
        onPress={() => alert('Hello')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },
});
export default hello;
