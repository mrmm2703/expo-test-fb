import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';

var firebaseConfig = {
  apiKey: "AIzaSyBIKZvH1sW7ed1vcOQEeXVOg8fRye4rFYU",
  authDomain: "authtest-fc660.firebaseapp.com",
  databaseURL: "https://authtest-fc660.firebaseio.com",
  projectId: "authtest-fc660",
  storageBucket: "authtest-fc660.appspot.com",
  messagingSenderId: "542827337773",
  appId: "1:542827337773:web:2172b548d0f6610ca880a4",
  measurementId: "G-V6YB7SXGLJ",
};

console.warn("Hey")

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start on your app!!</Text>
      <Text>BLEEH</Text>
      <Button onPress={buttonPress} title="Press me!"/>
    </View>
  );
}

async function logIn() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('739073833170927', {
      permissions: ['public_profile', 'email', 'user_birthday', 'user_gender', 'user_location'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      console.warn(`Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    console.warn(`Facebook Login Error: ${message}`);
  }
}

//firebase.initializeApp(firebaseConfig);
function buttonPress(){
  logIn();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, something: {
    alignItems: 'center',
    top: 15,
  }
});
