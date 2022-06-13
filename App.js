import React, {useState} from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () =>{
  const [toggle, setToggle] = useState(false); //false

  const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle);
  //if toggle return light
  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image
        style={
          toggle 
            ? style.lightingOn
            : style.lightingOff} 
        source={
          toggle 
            ? require('./assets/icons/eco-light.png') 
            : require('./assets/icons/eco-light-off.png')}
      />

      <Image
        style={style.dioLogo} 
        source={
          toggle 
            ? require('./assets/icons/logo-dio.png') 
            : require('./assets/icons/logo-dio-white.png')}
      />

      <Image
        style={
          toggle 
            ? style.lightingOn
            : style.lightingOff
        } 
        source={require('./assets/icons/author-name.png')}
      />
    </TouchableOpacity>
  </View>;
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});