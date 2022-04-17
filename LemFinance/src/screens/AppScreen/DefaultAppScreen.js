import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, Text} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import Accueil from "../AppScreen/Accueil";
import BarreMenu from "../../Components/Card/barreMenu";
import Search from "./Search";
import Social from "./Social";
import Wallet from "./Wallet";
//
// import {NavigationContainer} from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DefaultAppScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.defaultView}>
                {/*<Accueil/>*/}
                <Search/>
                {/*<Social/>*/}
                {/*<Wallet/>*/}

                <BarreMenu
                    style={styles.styleBarreMenu}
                    icon3Name="account-group"
                    icon3="magnify"
                />
            </View>

        </View>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //             name="Search"
        //             component={Search}
        //             options={{title: 'Welcome'}}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    defaultView: {
        flex: 1
    },
    styleBarreMenu: {
        height: 50,
        width: '100%',
        backgroundColor: "#4da6a9",
        position: "absolute",
        bottom: 0,
    },
});

export default DefaultAppScreen;
