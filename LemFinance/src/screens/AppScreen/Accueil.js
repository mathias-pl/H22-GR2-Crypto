import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import MaterialCardWithoutImage from "../../Components/Card/MaterialCardWithoutImage";
import MaterialIconButtonsFooter1 from "../../Components/Card/MaterialIconButtonsFooter1";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

// import '../../global'

function Accueil(props) {
    const pressHome = () => props.nav.navigate('Accueil')
    const pressWallet = () => props.nav.navigate('Wallet')
    const pressSearch = () => props.nav.navigate('Search')
    const pressSocial = () => props.nav.navigate('Social')

    global.foo = "default";

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.materialCardWithoutImageColumn}>
                    <View style={styles.group}>
                        <Text style={styles.nomUtilisateur}>nomUtilisateur</Text>
                        <Text style={styles.montantArgent}>montantArgent</Text>
                    </View>

                    <MaterialCardWithoutImage
                        style={styles.materialCardWithoutImage}
                    ></MaterialCardWithoutImage>

                    <View style={styles.group5}>

                        <ScrollView style={styles.group2Row} horizontal={true}>

                            <View style={styles.group4}>
                                <View style={styles.rect2}>
                                    <View style={styles.imageRow}>
                                        <Image
                                            source={require("../../../assets/images/BtcIcon.png")}
                                            resizeMode="contain"
                                            style={styles.image}
                                        ></Image>
                                        <Text style={styles.btc}>BTC</Text>
                                    </View>
                                    <Text style={styles.price}>btcPrice</Text>
                                </View>
                            </View>

                            <View style={styles.group4}>
                                <View style={styles.rect2}>
                                    <View style={styles.imageRow}>
                                        <Image
                                            source={require("../../../assets/images/BtcIcon.png")}
                                            resizeMode="contain"
                                            style={styles.image}
                                        ></Image>
                                        <Text style={styles.btc}>BTC</Text>
                                    </View>
                                    <Text style={styles.price}>btcPrice</Text>
                                </View>
                            </View>

                            <View style={styles.group4}>
                                <View style={styles.rect2}>
                                    <View style={styles.imageRow}>
                                        <Image
                                            source={require("../../../assets/images/BtcIcon.png")}
                                            resizeMode="contain"
                                            style={styles.image}
                                        ></Image>
                                        <Text style={styles.btc}>BTC</Text>
                                    </View>
                                    <Text style={styles.price}>btcPrice</Text>
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
                                    <Text style={styles.price2}>btcPrice</Text>
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
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.sgroup5}>
                    <View style={styles.sgroup4}>
                        <View style={styles.srect2}>
                            <View style={styles.sgroup3}>
                                <View style={styles.snameRow}>
                                    <Text style={styles.sname}>NAME</Text>
                                    <Text style={styles.sportfolioValue}>PORTFOLIO_VALUE</Text>
                                    <Text style={styles.sadd}>DELETE</Text>
                                    <Image
                                        source={require("../../../assets/images/avatar.jpg")}
                                        resizeMode="contain"
                                        style={styles.simage}
                                    ></Image>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>


            <View style={[styles.containerFooter, styles.materialIconButtonsFooter1]}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => pressHome()}>
                    <MaterialCommunityIconsIcon
                        name="home"
                        style={styles.activeIcon}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => pressWallet()}>
                    <MaterialCommunityIconsIcon
                        name="wallet"
                        style={styles.icon}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => pressSearch()}>
                    <MaterialCommunityIconsIcon
                        name={props.icon3 || "magnify"}
                        style={styles.icon}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => pressSocial()}>
                    <MaterialCommunityIconsIcon
                        name="account-group"
                        style={styles.icon}
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
        width: 160,
        height: 44,
        marginTop: 20,
        marginLeft: 10
    },
    nomUtilisateur: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 24
    },
    montantArgent: {
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    group5: {
        width: 330,
        height: 92,
        flexDirection: "row",
        marginTop: 50,
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
    buttonWrapper: {
        flex: 1,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    icon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        opacity: 0.8
    },
    activeIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    },
    sgroup5: {
        width: 360,
        height: 86,
        marginTop: 50
    },
    sgroup4: {
        width: 360,
        height: 86
    },
    srect2: {
        width: 360,
        height: 86,
        backgroundColor: "#E6E6E6"
    },
    sgroup3: {
        width: 332,
        height: 72,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 14
    },
    sname: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 28
    },
    snameRow: {
        height: 72,
        flexDirection: "row",
        flex: 1
    },
    sportfolioValue: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        width: 123,
        marginLeft: 13,
        marginTop: 28
    },
    sadd: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 18,
        marginTop: 28
    },
    simage: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginLeft: 18
    },
});
export default Accueil;
