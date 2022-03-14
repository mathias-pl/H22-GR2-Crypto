import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from "./src/screens/SignInScreen"
import PageZeroScreen from "./src/screens/SignInScreen/PageZeroScreen";

export default function App() {
  return (
    <View style={styles.root}>
      <PageZeroScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
