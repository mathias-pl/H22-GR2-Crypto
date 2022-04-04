import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from "./src/screens/SignInScreen"
import PageZeroScreen from "./src/screens/SignInScreen/PageZeroScreen";
import Home from "./src/screens/SignInScreen/Home";
import Login from "./src/screens/SignInScreen/Login";
import Signup from "./src/screens/SignInScreen/Signup";
import Accueil from "./src/screens/SignInScreen/Accueil";
import LogInScreen from "./src/screens/SignInScreen/LogInScreen";

export default function App() {
  return (
    <View style={styles.root}>
      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<Signup/>*/}
      {/*<Accueil/>*/}

      <PageZeroScreen></PageZeroScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
