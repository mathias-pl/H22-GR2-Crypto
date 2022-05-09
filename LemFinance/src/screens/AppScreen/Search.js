import React, {Component} from "react";
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import MaterialCardWithImageAndTitle5 from "../../Components/SearchBars/MaterialCardWithImageAndTitle5";
import MaterialCardWithImageAndTitle6 from "../../Components/SearchBars/MaterialCardWithImageAndTitle6";
import MaterialSearchBarWithBackground from "../../Components/SearchBars/MaterialSearchBarWithBackground";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Search(props) {

    const pressHome = () => props.nav.navigate('Accueil')
    const pressWallet = () => props.nav.navigate('Wallet')
    const pressSearch = () => props.nav.navigate('Search')
    const pressSocial = () => props.nav.navigate('Social')

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.materialSearchBarWithBackgroundColumn}>
                    <MaterialSearchBarWithBackground
                        style={styles.materialSearchBarWithBackground}
                    />
                    <Text style={styles.loremIpsum}>2 cryptocurrencies found!</Text>
                    <MaterialCardWithImageAndTitle5
                        style={styles.materialCardWithImageAndTitle5}
                    />
                    <MaterialCardWithImageAndTitle6
                        style={styles.materialCardWithImageAndTitle6}
                    />
                </View>
                <View style={styles.materialSearchBarWithBackgroundColumnFiller}/>
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
                        style={styles.icon1}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper3} onPress={() => pressSearch()}>
                    <MaterialCommunityIconsIcon
                        name={props.icon3 || "magnify"}
                        style={styles.activeIcon}
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
    ///
    materialSearchBarWithBackground: {
        height: 56,
        width: 357,
        borderRadius: 29,
        backgroundColor: "#c8e3e3",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        overflow: "visible",
        marginLeft: 1
    },
    loremIpsum: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 22,
        textAlign: "left",
        marginTop: 11,
        marginLeft: 45
    },
    materialCardWithImageAndTitle5: {
        height: 166,
        width: 359,
        backgroundColor: "#ffffff",
        marginTop: 14
    },
    materialCardWithImageAndTitle6: {
        height: 166,
        width: 357,
        marginTop: 5
    },
    materialSearchBarWithBackgroundColumn: {
        width: 359,
        marginTop: 44,
        marginLeft: 8
    },
    materialSearchBarWithBackgroundColumnFiller: {
        flex: 1
    },
});

export default Search;
