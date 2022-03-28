import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";

function Login(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/images/LEM_Logo.png")}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <MaterialButtonPrimary
          caption="CONNEXION"
        style={styles.connexionButton}
      ></MaterialButtonPrimary>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   EMAIL"
        style={styles.emailInput}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   MOT DE PASSE"
        style={styles.passwordInput}
      ></MaterialUnderlineTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 150,
    alignSelf: "center"
  },
  connexionButton: {
    height: 46,
    width: 274,
    borderRadius: 12,
    backgroundColor: "rgba(77,166,169,1)",
    marginTop: 331,
    marginLeft: 51
  },
  emailInput: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: -192,
    marginLeft: 38
  },
  passwordInput: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 18,
    marginLeft: 38
  }
});

export default Login;
