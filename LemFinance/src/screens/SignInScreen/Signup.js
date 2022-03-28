import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";

function Signup(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-transparent_bllL..png")}
        resizeMode="contain"
        style={styles.logo1}
      ></Image>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   EMAIL"
        style={styles.emailInput1}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   NOM D'UTILISATEUR"
        style={styles.emailInput2}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   MOT DE PASSE"
        style={styles.emailInput3}
      ></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox
        inputStyle="Placeholder"
        inputStyle="   RÉPÉTER LE MOT DE PASSE"
        style={styles.emailInput4}
      ></MaterialUnderlineTextbox>
      <MaterialButtonPrimary
        style={styles.connexionButton1}
      ></MaterialButtonPrimary>
      <View style={styles.materialUnderlineTextbox1Row}>
        <MaterialUnderlineTextbox1
          inputStyle="Placeholder"
          inputStyle="   PRÉNOM"
          style={styles.materialUnderlineTextbox1}
        ></MaterialUnderlineTextbox1>
        <MaterialUnderlineTextbox1
          inputStyle="Placeholder"
          inputStyle="   PRÉNOM"
          style={styles.materialUnderlineTextbox2}
        ></MaterialUnderlineTextbox1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo1: {
    height: 120,
    width: 120,
    marginTop: 76,
    alignSelf: "center"
  },
  emailInput1: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 168,
    marginLeft: 38
  },
  emailInput2: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 15,
    marginLeft: 38
  },
  emailInput3: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 49,
    marginLeft: 43
  },
  emailInput4: {
    height: 43,
    width: 300,
    borderRadius: 12,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 11,
    marginLeft: 43
  },
  connexionButton1: {
    height: 46,
    width: 274,
    borderRadius: 12,
    backgroundColor: "rgba(77,166,169,1)",
    marginTop: 70,
    marginLeft: 51
  },
  materialUnderlineTextbox1: {
    height: 43,
    width: 144,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 12,
    marginLeft: -1
  },
  materialUnderlineTextbox2: {
    height: 43,
    width: 144,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 12,
    marginLeft: 11
  },
  materialUnderlineTextbox1Row: {
    height: 43,
    flexDirection: "row",
    marginTop: -418,
    marginLeft: 39,
    marginRight: 38
  }
});

export default Signup;
