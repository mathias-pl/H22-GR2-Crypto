import React, {Component} from "react";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import MaterialButtonWithVioletText from "../../Components/Card/MaterialButtonWithVioletText";
import MaterialButtonWithVioletText1 from "../../Components/Card/MaterialButtonWithVioletText1";
import MaterialButtonWithVioletText2 from "../../Components/Card/MaterialButtonWithVioletText2";
import MaterialButtonShare from "../../Components/Card/MaterialButtonShare";
import MaterialButtonShare1 from "../../Components/Card/MaterialButtonShare1";


function Social(props) {

    const pressHome = () => props.nav.navigate('Accueil')
    const pressWallet = () => props.nav.navigate('Wallet')
    const pressSearch = () => props.nav.navigate('Search')
    const pressSocial = () => props.nav.navigate('Social')

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>


                <View style={styles.container}>
                    <View style={styles.group2Column}>
                        <View style={styles.group2}>
                            <View style={styles.groupStackStack}>
                                <View style={styles.groupStack}>
                                    <View style={styles.group}>
                                        <MaterialButtonWithVioletText
                                            style={styles.materialButtonWithVioletText}
                                        ></MaterialButtonWithVioletText>
                                    </View>
                                    <View style={styles.rect}></View>
                                </View>
                                <MaterialButtonWithVioletText1
                                    style={styles.materialButtonWithVioletText1}
                                ></MaterialButtonWithVioletText1>
                                <MaterialButtonWithVioletText2
                                    style={styles.materialButtonWithVioletText2}
                                ></MaterialButtonWithVioletText2>
                            </View>
                        </View>
                        <View style={styles.group5}>
                            <View style={styles.group4}>
                                <View style={styles.rect2}>
                                    <View style={styles.group3}>
                                        <View style={styles.nameRow}>
                                            <Text style={styles.name}>NAME</Text>
                                            <Text style={styles.portfolioValue}>PORTFOLIO_VALUE</Text>
                                            <Text style={styles.add}>DELETE</Text>
                                            <Image
                                                source={require("../../../assets/images/avatar.jpg")}
                                                resizeMode="contain"
                                                style={styles.image}
                                            ></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.group15}>
                            <View style={styles.group6}>
                                <View style={styles.group7}>
                                    <View style={styles.rect3}>
                                        <View style={styles.group8}>
                                            <View style={styles.name1Row}>
                                                <Text style={styles.name1}>NAME</Text>
                                                <Text style={styles.portfolioValue1}>PORTFOLIO_VALUE</Text>
                                                <Text style={styles.add4}>ADD</Text>
                                                <Image
                                                    source={require("../../../assets/images/avatar.jpg")}
                                                    resizeMode="contain"
                                                    style={styles.image1}
                                                ></Image>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.group14}>
                            <View style={styles.group10}>
                                <View style={styles.rect4}>
                                    <View style={styles.group13}>
                                        <View style={styles.name2Row}>
                                            <Text style={styles.name2}>NAME</Text>
                                            <Text style={styles.portfolioValue3}>PORTFOLIO_VALUE</Text>
                                            <View style={styles.group12}>
                                                <View style={styles.group11Row}>
                                                    <View style={styles.group11}>
                                                        <View style={styles.add3Stack}>
                                                            <Text style={styles.add3}></Text>
                                                            <MaterialButtonShare
                                                                style={styles.materialButtonShare}
                                                            ></MaterialButtonShare>
                                                        </View>
                                                    </View>
                                                    <MaterialButtonShare1
                                                        style={styles.materialButtonShare1}
                                                    ></MaterialButtonShare1>
                                                </View>
                                            </View>
                                            <Image
                                                source={require("../../../assets/images/avatar.jpg")}
                                                resizeMode="contain"
                                                style={styles.image2}
                                            ></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


            </ScrollView>
            <View style={[styles.containerFooter, styles.materialIconButtonsFooter1]}>
                <TouchableOpacity style={styles.buttonWrapper1} onPress={() => pressHome()}>
                    <MaterialCommunityIconsIcon
                        name="home"
                        style={styles.icon1}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper2} onPress={() => pressWallet()}>
                    <MaterialCommunityIconsIcon
                        name="wallet"
                        style={styles.icon1}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper3} onPress={() => pressSearch()}>
                    <MaterialCommunityIconsIcon
                        name={props.icon3 || "magnify"}
                        style={styles.icon3}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper4} onPress={() => pressSocial()}>
                    <MaterialCommunityIconsIcon
                        name="account-group"
                        style={styles.activeIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    ////////////////////
    group2: {
        width: 300,
        height: 36,
        marginLeft: 30
    },
    group: {
        top: 0,
        left: 0,
        width: 100,
        height: 36,
        position: "absolute"
    },
    materialButtonWithVioletText: {
        height: 36,
        width: 100
    },
    rect: {
        top: 35,
        left: 0,
        width: 300,
        height: 1,
        position: "absolute",
        backgroundColor: "rgba(74,74,74,1)"
    },
    groupStack: {
        top: 0,
        left: 0,
        width: 300,
        height: 36,
        position: "absolute"
    },
    materialButtonWithVioletText1: {
        height: 36,
        width: 100,
        position: "absolute",
        left: 100,
        top: 0
    },
    materialButtonWithVioletText2: {
        height: 36,
        width: 100,
        position: "absolute",
        left: 200,
        top: 0
    },
    groupStackStack: {
        width: 300,
        height: 36
    },
    group5: {
        width: 360,
        height: 86,
        marginTop: 202
    },
    group4: {
        width: 360,
        height: 86
    },
    rect2: {
        width: 360,
        height: 86,
        backgroundColor: "#E6E6E6"
    },
    group3: {
        width: 332,
        height: 72,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 14
    },
    name: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 28
    },
    portfolioValue: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        width: 123,
        marginLeft: 13,
        marginTop: 28
    },
    add: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 18,
        marginTop: 28
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginLeft: 18
    },
    nameRow: {
        height: 72,
        flexDirection: "row",
        flex: 1
    },
    group15: {
        width: 360,
        height: 86,
        marginTop: -269
    },
    group6: {
        width: 360,
        height: 86
    },
    group7: {
        width: 360,
        height: 86
    },
    rect3: {
        width: 360,
        height: 86,
        backgroundColor: "#E6E6E6"
    },
    group8: {
        width: 332,
        height: 72,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 14
    },
    name1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 28
    },
    portfolioValue1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        width: 123,
        marginLeft: 13,
        marginTop: 28
    },
    add4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 27,
        marginTop: 28
    },
    image1: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginLeft: 30
    },
    name1Row: {
        height: 72,
        flexDirection: "row",
        flex: 1
    },
    group14: {
        width: 360,
        height: 86,
        marginTop: 6
    },
    group10: {
        width: 360,
        height: 86
    },
    rect4: {
        width: 360,
        height: 86,
        backgroundColor: "#E6E6E6"
    },
    group13: {
        width: 332,
        height: 72,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 12
    },
    name2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 28
    },
    portfolioValue3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        width: 123,
        marginLeft: 9,
        marginTop: 28
    },
    group12: {
        width: 83,
        height: 40,
        flexDirection: "row",
        marginLeft: 4,
        marginTop: 16
    },
    group11: {
        width: 40,
        height: 40
    },
    add3: {
        top: 8,
        left: 24,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    materialButtonShare: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32
    },
    add3Stack: {
        width: 32,
        height: 32
    },
    materialButtonShare1: {
        height: 40,
        width: 40,
        marginLeft: 3
    },
    group11Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
    },
    image2: {
        width: 72,
        height: 72,
        borderRadius: 36,
        marginLeft: 2
    },
    name2Row: {
        height: 72,
        flexDirection: "row",
        flex: 1
    },
    group2Column: {
        width: 360,
        marginTop: 70,
        marginLeft: 8
    },
    group2ColumnFiller: {
        flex: 1
    },
});

export default Social;
