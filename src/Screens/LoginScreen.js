import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          height: 45,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Go to HomeScreen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
