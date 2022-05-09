import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCardWithVerticalButtons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage14.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <TouchableOpacity style={styles.topBtn}>
          <MaterialCommunityIconsIcon
            name="heart"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBtn}>
          <MaterialCommunityIconsIcon
            name="book"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn}>
          <MaterialCommunityIconsIcon
            name="share"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
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
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    minHeight: 240,
    minWidth: 240,
    width: 236,
    height: 238,
    alignSelf: "center"
  },
  body: {
    padding: 8,
    paddingLeft: 16
  },
  topBtn: {
    padding: 8,
    marginTop: 8,
    marginBottom: 8
  },
  icon1: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  centerBtn: {
    padding: 8,
    marginTop: 8,
    marginBottom: 8
  },
  icon2: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  },
  bottomBtn: {
    padding: 8,
    marginTop: 8,
    marginBottom: 8
  },
  icon3: {
    fontSize: 24,
    color: "#000",
    opacity: 0.5
  }
});

export default MaterialCardWithVerticalButtons;
