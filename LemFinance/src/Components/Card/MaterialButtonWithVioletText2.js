import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.search}>SEARCH</Text>
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
  search: {
    color: "rgba(0,0,0,1)",
    fontSize: 14
  }
});

export default MaterialButtonWithVioletText2;
