import React, {Component} from "react";
import {StyleSheet, View, Text, Image} from "react-native";

function FicheCrypto(props, test) {
    return(<View style={styles.groupCrypto}>
        <View style={styles.rectContainer}>
            <View style={styles.imageNameRow}>
                <Image
                    source={require("../../../assets/images/BtcIcon.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                <Text style={styles.btc}>BTC</Text>
            </View>
            <Text style={styles.price}>PRICE</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    groupCrypto: {
        width: 92,
        height: 92,
        marginRight: 26,
    },

    image: {
        width: 30,
        height: 30
    },
    btc: {
        fontFamily: "Roboto",
        color: "#121212",
        marginLeft: 9,
        marginTop: 9
    },
    price: {
        fontFamily: "Roboto",
        color: "#121212",
        marginTop: 18,
        marginLeft: 30
    },
    rectContainer: {
        width: 92,
        height: 92,
        backgroundColor: "#E6E6E6",
        borderRadius: 8
    },
    imageNameRow: {
        height: 30,
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 10,
        marginRight: 17
    },
});

export default FicheCrypto;