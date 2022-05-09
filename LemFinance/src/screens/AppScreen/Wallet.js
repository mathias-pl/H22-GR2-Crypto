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
                                            <Text style={styles.price}>PRICE</Text>
                                            <Text style={styles.xxYy}>XX.YY%</Text>
                                            <Text style={styles.graphique}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group4}>
                                    <View style={styles.rect1}>
                                        <View style={styles.group5}>
                                            <Text style={styles.btcusd1}>BTCUSD</Text>
                                            <Text style={styles.price1}>PRICE</Text>
                                            <Text style={styles.xxYy1}>XX.YY%</Text>
                                            <Text style={styles.graphique1}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group6}>
                                    <View style={styles.rect2}>
                                        <View style={styles.group7}>
                                            <Text style={styles.btcusd2}>BTCUSD</Text>
                                            <Text style={styles.price2}>PRICE</Text>
                                            <Text style={styles.xxYy2}>XX.YY%</Text>
                                            <Text style={styles.graphique2}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group8}>
                                    <View style={styles.rect3}>
                                        <View style={styles.group9}>
                                            <Text style={styles.btcusd3}>BTCUSD</Text>
                                            <Text style={styles.price3}>PRICE</Text>
                                            <Text style={styles.xxYy3}>XX.YY%</Text>
                                            <Text style={styles.graphique3}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group10}>
                                    <View style={styles.rect4}>
                                        <View style={styles.group11}>
                                            <Text style={styles.btcusd4}>BTCUSD</Text>
                                            <Text style={styles.price4}>PRICE</Text>
                                            <Text style={styles.xxYy4}>XX.YY%</Text>
                                            <Text style={styles.graphique4}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group12}>
                                    <View style={styles.rect5}>
                                        <View style={styles.group13}>
                                            <Text style={styles.btcusd5}>BTCUSD</Text>
                                            <Text style={styles.price5}>PRICE</Text>
                                            <Text style={styles.xxYy5}>XX.YY%</Text>
                                            <Text style={styles.graphique5}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group14}>
                                    <View style={styles.rect6}>
                                        <View style={styles.group15}>
                                            <Text style={styles.btcusd6}>BTCUSD</Text>
                                            <Text style={styles.price6}>PRICE</Text>
                                            <Text style={styles.xxYy6}>XX.YY%</Text>
                                            <Text style={styles.graphique6}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group16}>
                                    <View style={styles.rect7}>
                                        <View style={styles.group17}>
                                            <Text style={styles.btcusd7}>BTCUSD</Text>
                                            <Text style={styles.price7}>PRICE</Text>
                                            <Text style={styles.xxYy7}>XX.YY%</Text>
                                            <Text style={styles.graphique7}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group18}>
                                    <View style={styles.rect8}>
                                        <View style={styles.group19}>
                                            <Text style={styles.btcusd8}>BTCUSD</Text>
                                            <Text style={styles.price8}>PRICE</Text>
                                            <Text style={styles.xxYy8}>XX.YY%</Text>
                                            <Text style={styles.graphique8}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group20}>
                                    <View style={styles.rect9}>
                                        <View style={styles.group21}>
                                            <Text style={styles.btcusd9}>BTCUSD</Text>
                                            <Text style={styles.price9}>PRICE</Text>
                                            <Text style={styles.xxYy9}>XX.YY%</Text>
                                            <Text style={styles.graphique9}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group22}>
                                    <View style={styles.rect10}>
                                        <View style={styles.group23}>
                                            <Text style={styles.btcusd10}>BTCUSD</Text>
                                            <Text style={styles.price10}>PRICE</Text>
                                            <Text style={styles.xxYy10}>XX.YY%</Text>
                                            <Text style={styles.graphique10}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group24}>
                                    <View style={styles.rect11}>
                                        <View style={styles.group25}>
                                            <Text style={styles.btcusd11}>BTCUSD</Text>
                                            <Text style={styles.price11}>PRICE</Text>
                                            <Text style={styles.xxYy11}>XX.YY%</Text>
                                            <Text style={styles.graphique11}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group26}>
                                    <View style={styles.rect12}>
                                        <View style={styles.group27}>
                                            <Text style={styles.btcusd12}>BTCUSD</Text>
                                            <Text style={styles.price12}>PRICE</Text>
                                            <Text style={styles.xxYy12}>XX.YY%</Text>
                                            <Text style={styles.graphique12}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group28}>
                                    <View style={styles.rect13}>
                                        <View style={styles.group29}>
                                            <Text style={styles.btcusd13}>BTCUSD</Text>
                                            <Text style={styles.price13}>PRICE</Text>
                                            <Text style={styles.xxYy13}>XX.YY%</Text>
                                            <Text style={styles.graphique13}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group30}>
                                    <View style={styles.rect14}>
                                        <View style={styles.group31}>
                                            <Text style={styles.btcusd14}>BTCUSD</Text>
                                            <Text style={styles.price14}>PRICE</Text>
                                            <Text style={styles.xxYy14}>XX.YY%</Text>
                                            <Text style={styles.graphique14}>GRAPHIQUE?!</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.group32}>
                                    <View style={styles.rect15}>
                                        <View style={styles.group33}>
                                            <Text style={styles.btcusd15}>BTCUSD</Text>
                                            <Text style={styles.price15}>PRICE</Text>
                                            <Text style={styles.xxYy15}>XX.YY%</Text>
                                            <Text style={styles.graphique15}>GRAPHIQUE?!</Text>
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
                        style={styles.icon4}
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
    },
    icon1: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    buttonWrapper2: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    activeIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    },
    buttonWrapper3: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon3: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    buttonWrapper4: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon4: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    ///////////////

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
        justifyContent: "space-between",
        width: 319
    },
    group3: {},


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
    group4: {},
    rect1: {
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
    group5: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group6: {},
    rect2: {
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
    group7: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group8: {},
    rect3: {
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
    group9: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group10: {},
    rect4: {
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
    group11: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group12: {},
    rect5: {
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
    group13: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group14: {},
    rect6: {
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
    group15: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group16: {},
    rect7: {
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
    group17: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group18: {},
    rect8: {
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
    group19: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group20: {},
    rect9: {
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
    group21: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd9: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price9: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy9: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique9: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group22: {},
    rect10: {
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
    group23: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd10: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price10: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy10: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique10: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group24: {},
    rect11: {
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
    group25: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group26: {},
    rect12: {
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
    group27: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd12: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price12: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy12: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique12: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group28: {},
    rect13: {
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
    group29: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd13: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price13: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy13: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique13: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    group30: {},
    rect14: {
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
    group31: {
        height: 17,
        flexDirection: "row",
        width: 303,
        marginTop: 9,
        marginLeft: 10
    },
    btcusd14: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    price14: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    xxYy14: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginRight: 25
    },
    graphique14: {
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
    groupColumn: {
        width: 319,
        marginTop: 123,
        marginLeft: 28
    },
    groupColumnFiller: {
        flex: 1
    },
});

export default Wallet;
