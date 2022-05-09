import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.add}>ADD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  add: {
    color: "rgba(0,0,0,1)",
    fontSize: 14
  }
});

export default MaterialButtonWithVioletText4;
