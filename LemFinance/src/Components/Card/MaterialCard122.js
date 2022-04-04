import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCard122(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <Image
          source={require("../assets/images/cardImage2.png")}
          style={styles.cardItemImagePlace}
        ></Image>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            BTC{"\n"}47456.82$ USD{"\n"}+4.28%
          </Text>
          <Text style={styles.subtitleStyle}>Subtitle here</Text>
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
    left: -3,
    width: 357,
    top: -2,
    height: 152
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 16,
    width: 16,
    margin: 2,
    left: 7,
    top: 5,
    alignSelf: "center"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default MaterialCard122;
