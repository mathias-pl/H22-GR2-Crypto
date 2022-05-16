import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Wallet(props) {

    const pressHome = () => props.nav.navigate('Accueil')
    const pressWallet = () => props.nav.navigate('Wallet')
    const pressSearch = () => props.nav.navigate('Search')
    const pressSocial = () => props.nav.navigate('Social')

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.groupColumn}>
                    <View style={styles.group}>
                        <Text style={styles.gainers}>GAINERS</Text>
                        <Text style={styles.losers}>LOSERS</Text>
                    </View>
                    <View>
                        <View style={styles.Agroup4}>
                            <View style={styles.Arect2}>
                                <View style={styles.Aimage2Row}>
                                    <Image
                                        source={require("../../../assets/images/BtcIcon.png")}
                                        resizeMode="contain"
                                        style={styles.Aimage2}
                                    ></Image>
                                    <Text style={styles.Abtc2}>BTC</Text>
                                </View>
                                <Text style={styles.Aprice2}>btcPrice</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.myPortfolio}>MY PORTFOLIO</Text>
                    <View style={styles.scrollArea}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={styles.scrollArea_contentContainerStyle}
                        >
                            <View style={styles.group34}>
                                <View style={styles.group3}>
                                    <View style={styles.rect}>
                                        <View style={styles.group2}>
                                            <Text style={styles.btcusd}>BTCUSD</Text>
                                            <Text style={styles.price}>28240.53</Text>
                                            <Text style={styles.xxYy}>-4.69%</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.group3}>
                                    <View style={styles.rect}>
                                        <View style={styles.group2}>
                                            <Text style={styles.btcusd}>ETHUSD</Text>
                                            <Text style={styles.price}>1618.45</Text>
                                            <Text style={styles.xxYy}>-5.46%</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.group3}>
                                    <View style={styles.rect}>
                                        <View style={styles.group2}>
                                            <Text style={styles.btcusd}>LUNAUSD</Text>
                                            <Text style={styles.price}>0.00004968</Text>
                                            <Text style={styles.xxYy}>-99.98%</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.group3}>
                                    <View style={styles.rect}>
                                        <View style={styles.group2}>
                                            <Text style={styles.btcusd}>ETHUSD</Text>
                                            <Text style={styles.price}>1618.45</Text>
                                            <Text style={styles.xxYy}>-5.46%</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.group3}>
                                    <View style={styles.rect}>
                                        <View style={styles.group2}>
                                            <Text style={styles.btcusd}>BTCUSD</Text>
                                            <Text style={styles.price}>28240.53</Text>
                                            <Text style={styles.xxYy}>-4.69%</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

            </ScrollView>
            <View style={[styles.containerFooter, styles.materialIconButtonsFooter1]}>
                <TouchableOpacity style={styles.buttonWrapper1} onPress={() => pressHome()}>
                    <MaterialCommunityIconsIcon
                        name="home"
                        style={styles.icon1}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper2} onPress={() => pressWallet()}>
                    <MaterialCommunityIconsIcon
                        name="wallet"
                        style={styles.activeIcon}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper3} onPress={() => pressSearch()}>
                    <MaterialCommunityIconsIcon
                        name={props.icon3 || "magnify"}
                        style={styles.icon3}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper4} onPress={() => pressSocial()}>
                    <MaterialCommunityIconsIcon
                        name="account-group"
                        style={styles.icon1}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    groupColumn: {
        width: 319,
        marginTop: 123,
        marginLeft: 28
    },
    materialIconButtonsFooter1: {
        height: 65,
        width: 375,
        backgroundColor: "#4da6a9"
    },
    containerFooter: {
        backgroundColor: "#3f51b5",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3
    },
    buttonWrapper1: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    }, buttonWrapper2: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    }, buttonWrapper3: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    }, buttonWrapper4: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon1: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    }, icon3: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    }, activeIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    },
    group: {
        width: 158,
        height: 17,
        flexDirection: "row",
        marginLeft: 31
    },
    gainers: {
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    losers: {
        fontFamily: "roboto-regular",
        color: "#121212",
        flex: 1,
        marginLeft: 143
    },
    myPortfolio: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 253,
        marginLeft: 20
    },
    scrollArea: {
        width: 319,
        height: 324,
        marginTop: 9
    },
    scrollArea_contentContainerStyle: {
        height: 713,
        width: 319
    },
    group34: {
        height: 713,
        width: 319
    },
    group3: {
        marginTop: 20
    },
    rect: {
        width: 319,
        height: 34,
        backgroundColor: "#E6E6E6",
        shadowColor: "rgba(160,155,155,1)",
        shadowOffset: {
            width: 5,
            height: 3
        },
        elevation: 15,
        shadowOpacity: 1,
        shadowRadius: 5
    },
    group2: {
        height: 17,
        flexDirection: "row",
        justifyContent: "space-around",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group32: {},
    rect15: {
        width: 319,
        height: 34,
        backgroundColor: "#E6E6E6",
        shadowColor: "rgba(160,155,155,1)",
        shadowOffset: {
            width: 5,
            height: 3
        },
        elevation: 15,
        shadowOpacity: 1,
        shadowRadius: 5
    },
    group33: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd15: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price15: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy15: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique15: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    Agroup4: {
        marginTop: 20,
        width: 92,
        height: 92,
        marginLeft: 25
    },
    Arect2: {
        width: 92,
        height: 92,
        backgroundColor: "#E6E6E6",
        borderRadius: 8
    },
    Aimage2Row: {
        height: 30,
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 10,
        marginRight: 17
    },
    Aimage2: {
        width: 30,
        height: 30
    },
    Abtc2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 9,
        marginTop: 9
    },
    Aprice2: {
    fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 18,
        marginLeft: 30
},

});

export default Wallet;
