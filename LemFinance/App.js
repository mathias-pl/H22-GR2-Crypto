import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from "./src/screens/SignInScreen"
import PageZeroScreen from "./src/screens/SignInScreen/PageZeroScreen";
import Home from "./src/screens/SignInScreen/Home";

export default function App() {
  return (
    <View style={styles.root}>
      {/*<PageZeroScreen/>*/}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
