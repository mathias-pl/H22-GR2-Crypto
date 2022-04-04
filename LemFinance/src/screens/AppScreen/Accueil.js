import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialCardWithoutImage from "../../Components/Card/MaterialCardWithoutImage";
import MaterialIconButtonsFooter1 from "../../Components/Card/MaterialIconButtonsFooter1";

function Accueil(props) {
  return (
      <View style={styles.container}>
        <View style={styles.materialCardWithoutImageColumn}>
          <MaterialCardWithoutImage
              style={styles.materialCardWithoutImage}
          ></MaterialCardWithoutImage>
          <View style={styles.group}>
            <Text style={styles.nomUtilisateur}>nomUtilisateur</Text>
            <Text style={styles.montantArgent}>montantArgent</Text>
          </View>
          <View style={styles.group5}>
            <View style={styles.group2Row}>
              <View style={styles.group2}>
                <View style={styles.rect}>
                  <View style={styles.imageRow}>
                    <Image
                        source={require("../../../assets/images/BtcIcon.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                    <Text style={styles.btc}>BTC</Text>
                  </View>
                  <Text style={styles.price}>PRICE</Text>
                </View>
              </View>
              <View style={styles.group4}>
                <View style={styles.rect2}>
                  <View style={styles.image2Row}>
                    <Image
                        source={require("../../../assets/images/BtcIcon.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                    <Text style={styles.btc2}>BTC</Text>
                  </View>
                  <Text style={styles.price2}>PRICE</Text>
                </View>
              </View>
              <View style={styles.group3}>
                <View style={styles.rect1}>
                  <View style={styles.image1Row}>
                    <Image
                        source={require("../../../assets/images/BtcIcon.png")}
                        resizeMode="contain"
                        style={styles.image1}
                    ></Image>
                    <Text style={styles.btc1}>BTC</Text>
                  </View>
                  <Text style={styles.price1}>PRICE</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.materialCardWithoutImageColumnFiller}></View>
        <MaterialIconButtonsFooter1
            icon3Name="account-group"
            icon3="magnify"
            style={styles.materialIconButtonsFooter1}
        ></MaterialIconButtonsFooter1>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithoutImage: {
    height: 221,
    width: 335,
    borderRadius: 12,
    backgroundColor: "rgba(77,166, 166,0.31)",
    marginTop: 59
  },
  group: {
    width: 82,
    height: 44,
    marginTop: -280,
    marginLeft: 10
  },
  nomUtilisateur: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  montantArgent: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  group5: {
    width: 330,
    height: 92,
    flexDirection: "row",
    marginTop: 292,
    marginLeft: 5
  },
  group2: {
    width: 92,
    height: 92
  },
  rect: {
    width: 92,
    height: 92,
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  image: {
    width: 30,
    height: 30
  },
  btc: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 9,
    marginTop: 9
  },
  imageRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 17
  },
  price: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 30
  },
  group4: {
    width: 92,
    height: 92,
    marginLeft: 25
  },
  rect2: {
    width: 92,
    height: 92,
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  image2: {
    width: 30,
    height: 30
  },
  btc2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 9,
    marginTop: 9
  },
  image2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 17
  },
  price2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 30
  },
  group3: {
    width: 92,
    height: 92,
    marginLeft: 29
  },
  rect1: {
    width: 92,
    height: 92,
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  image1: {
    width: 30,
    height: 30
  },
  btc1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 9,
    marginTop: 9
  },
  image1Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 17
  },
  price1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 30
  },
  group2Row: {
    height: 92,
    flexDirection: "row",
    flex: 1
  },
  materialCardWithoutImageColumn: {
    width: 335,
    marginTop: 47,
    marginLeft: 20
  },
  materialCardWithoutImageColumnFiller: {
    flex: 1
  },
  materialIconButtonsFooter1: {
    height: 56,
    width: 375,
    backgroundColor: "#4da6a9"
  }
});

export default Accueil;
