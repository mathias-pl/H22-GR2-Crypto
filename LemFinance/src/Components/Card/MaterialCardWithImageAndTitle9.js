import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonWithVioletText4 from "./MaterialButtonWithVioletText4";

function MaterialCardWithImageAndTitle9(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.name}>NAME</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.portfolioValue}>PORTFOLIO_VALUE</Text>
      </View>
      <MaterialButtonWithVioletText4
        style={styles.materialButtonWithVioletText4}
      ></MaterialButtonWithVioletText4>
      <Image
        source={require("../assets/images/avatar2.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
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
  rect: {
    padding: 8,
    height: 36
  },
  name: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  rect2: {
    padding: 8,
    height: 36
  },
  portfolioValue: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  materialButtonWithVioletText4: {
    height: 36,
    width: 57
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  }
});

export default MaterialCardWithImageAndTitle9;
