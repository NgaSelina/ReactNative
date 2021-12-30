import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const UselessTextInput = () => {
  const { navigate } = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = {uri: "https://kenh14cdn.com/2020/9/25/hinh-nen-iphone-14-16009901160591553517350.jpg"};
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.success}>Success!</Text>
      <Text style={styles.textadd}>Email Address</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="email address"
      />
     <Text style={styles.textadd}>Password</Text>
       
     <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        maxLength={5}
        secureTextEntry={isSecureText}
        placeholder="password"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style = {{width: 24, height: 24, position: 'absolute', top: 20, right: 20}} onPress = { () => { setSecureText(!isSecureText)}}>

        { !isSecureText? 
        
          <Image style={{ width: '100%', height: '100%'}} resizeMode="contain" source={{ uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Eye-2-icon.png' }} />
          : <Image style={{ width: '100%', height: '100%'}} resizeMode="contain" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMD3IcMCiSshEopomEAVcP--CPjx9lvVDlw&usqp=CAU' }} />}
      </TouchableOpacity>


      </View>
      <TouchableOpacity style = {styles.container} 
      onPress = { () => {navigate('Remenber')}}>
      <Text style={styles.remember}>I don't remember my passcode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  textadd: {
    marginTop: 20,
    color: 'gray',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  success: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
    color: 'gray',
    fontWeight: 'bold'
  },
  image: {
    height: 150,
  },
  remember:
  {
    color: 'blue',
    marginTop: 20,
    fontWeight: 'bold',  
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {  UselessTextInput };