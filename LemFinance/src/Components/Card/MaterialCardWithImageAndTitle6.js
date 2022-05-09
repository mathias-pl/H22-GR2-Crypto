import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle6(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.ethereumUsd}>Ethereum/USD</Text>
          <Text style={styles.ethusd}>ETHUSD</Text>
        </View>
        <Image
          source={require("../assets/images/Ethereum-Logo.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.group3}>
        <View style={styles.group}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.price}>price</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.change24}>%change24</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.group2}>
          <TouchableOpacity style={styles.actionButton3}>
            <Text style={styles.marketCap}>marketCap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton4}>
            <Text style={styles.volume}>volume</Text>
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
    height: 90
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  ethereumUsd: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  ethusd: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 70,
    width: 70,
    margin: 16
  },
  group3: {
    flexDirection: "row",
    width: 179,
    height: 75
  },
  group: {
    width: 179,
    height: 72
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  price: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  change24: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  group2: {
    width: 179,
    height: 75
  },
  actionButton3: {
    padding: 8,
    height: 36
  },
  marketCap: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton4: {
    padding: 8,
    height: 36
  },
  volume: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default MaterialCardWithImageAndTitle6;
