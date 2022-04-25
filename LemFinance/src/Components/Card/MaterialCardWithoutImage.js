import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function MaterialCardWithoutImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Bonjour nomUtilisateur</Text>
        <Text style={styles.subtitleStyle}>+3.58%</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Votre portefeuille vaut</Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>23&#39;592.40$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.usd}>USD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 28,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 22,
    color: "rgba(65,111,16,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  body: {
    padding: 16,
    paddingTop: 8,
    alignSelf: "center"
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 22,
    color: "#424242",
    flexWrap: "wrap"
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    alignSelf: "center"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  usd: {
    fontSize: 24,
    color: "#000",
    opacity: 0.9
  }
});

export default MaterialCardWithoutImage;
