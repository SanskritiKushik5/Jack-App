import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import {TextInput} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 10,
        padding: 10,
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        LoginScreen
      </Text>
      <TextInput
        label="Email"
        style={{width: 300, marginTop: 30}}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        style={{width: 300, marginTop: 30, marginBottom: 30}}
        onChangeText={text => setPassword(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            height: 45,
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 30,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            height: 45,
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 30,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
