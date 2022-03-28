import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from "./src/screens/SignInScreen"
import PageZeroScreen from "./src/screens/SignInScreen/PageZeroScreen";
import Home from "./src/screens/SignInScreen/Home";
import Login from "./src/screens/SignInScreen/Login";
import Signup from "./src/screens/SignInScreen/Signup";

export default function App() {
  return (
    <View style={styles.root}>
      {/*<Home/>*/}
      {/*<Login/>*/}
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
