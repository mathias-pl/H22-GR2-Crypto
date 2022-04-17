import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/SignInScreen/Home";
import Login from "./src/screens/SignInScreen/Login";
import Signup from "./src/screens/SignInScreen/Signup";
import Accueil from "./src/screens/AppScreen/Accueil";
import Search from "./src/screens/AppScreen/Search";
import Social from "./src/screens/AppScreen/Social";
import Wallet from "./src/screens/AppScreen/Wallet";
import Scroll from "./src/screens/SignInScreen/Scroll";
import DefaultAppScreen from "./src/screens/AppScreen/DefaultAppScreen";

export default function App() {
  return (
    <View style={styles.root}>

      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<Signup/>*/}
      {/*<Accueil/>*/}
      {/*<Scroll/>*/}
      <DefaultAppScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
