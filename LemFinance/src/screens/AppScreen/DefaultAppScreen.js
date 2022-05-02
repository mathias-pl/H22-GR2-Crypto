import React, {Component} from "react";
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, Text} from "react-native";
import MaterialButtonPrimary from "../../Components/CustomButton/MaterialButtonPrimary";
import MaterialUnderlineTextbox from "../../Components/CustomButton/MaterialUnderlineTextbox";
import Accueil from "../AppScreen/Accueil";
import MaterialIconButtonsFooter1 from "../../Components/Card/MaterialIconButtonsFooter1";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../SignInScreen/Home";
import LoginHelper from "../SignInScreen/LoginHelper";
import SignupHelper from "../SignInScreen/signupHelper";
import {createStackNavigator} from "@react-navigation/stack";
import Wallet from "./Wallet";
import AccueilHelper from "./AccueilHelper";
import WalletHelper from "./WalletHelper";

const Stack = createStackNavigator();

function DefaultAppScreen(props) {
    return (
        <View style={styles.container}>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="Accueil"
                                 screenOptions={{
                                     headerShown: false,
                                     animationEnabled: false
                                 }}

                >
                    <Stack.Screen
                        name="Accueil"
                        component={AccueilHelper}
                    />
                    <Stack.Screen
                        name="Wallet"
                        component={WalletHelper}
                    />

                </Stack.Navigator>
            </NavigationContainer>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    defaultView: {
        flex: 1
    },
    materialIconButtonsFooter1: {
        height: 56,
        width: 375,
        backgroundColor: "#4da6a9",
        position: "absolute",
        bottom: 0,
    },
});

export default DefaultAppScreen;
