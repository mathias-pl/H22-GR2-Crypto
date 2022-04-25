import 'react-native-gesture-handler';
import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/SignInScreen/Home";

import Login from "./src/screens/SignInScreen/Login";
import Signup from "./src/screens/SignInScreen/Signup";
import Accueil from "./src/screens/AppScreen/Accueil";
import Search from "./src/screens/AppScreen/Search";
import Social from "./src/screens/AppScreen/Social";
import Wallet from "./src/screens/AppScreen/Wallet";
import Scroll from "./src/screens/SignInScreen/Scroll";

import DefaultAppScreen from "./src/screens/AppScreen/DefaultAppScreen";
import SignupHelper from "./src/screens/SignInScreen/signupHelper";
import LoginHelper from "./src/screens/SignInScreen/LoginHelper";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                             screenOptions={{
                                 headerShown: false
                             }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginHelper}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupHelper}
                />
                <Stack.Screen
                    name="DefaultAppScreen"
                    component={DefaultAppScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>



        // <View style={styles.root}>
        //
        //   {/*<Home/>*/}
        //   <Login/>
        //   {/*<Signup/>*/}
        //   {/*<Accueil/>*/}
        //   {/*<DefaultAppScreen/>*/}
        //
        // </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
