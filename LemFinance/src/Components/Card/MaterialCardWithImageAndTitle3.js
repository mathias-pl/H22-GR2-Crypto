import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.bitcoinUsd}>Bitcoin/USD</Text>
          <Text style={styles.btcusd}>BTCUSD</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage6.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.group}>
        <View style={styles.actionBody1}>
          <TouchableOpacity style={styles.actionButton3}>
            <Text style={styles.actionText3}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton4}>
            <Text style={styles.actionText4}>ACTION 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>ACTION 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>ACTION 2</Text>
          </TouchableOpacity>
        </View>
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 82
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  bitcoinUsd: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  btcusd: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 60,
    width: 60,
    margin: 16
  },
  group: {
    flexDirection: "row",
    width: 175,
    height: 83,
    justifyContent: "space-between",
    left: 9,
    top: 81
  },
  actionBody1: {
    padding: 8,
    width: 175
  },
  actionButton3: {
    padding: 8,
    height: 36
  },
  actionText3: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton4: {
    padding: 8,
    height: 36
  },
  actionText4: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionBody: {
    padding: 8,
    width: 175,
    left: 175,
    top: 0,
    height: 176
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default MaterialCardWithImageAndTitle3;
