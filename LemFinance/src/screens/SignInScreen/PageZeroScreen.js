import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/LEM_Logo.png'

const PageZeroScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain"/>
        </View>)
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        paddingTop: 50
    },
    logo: {
        width: "75%",
        height: "75%",
    }
})

export default PageZeroScreen;