import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import ExpoStatusBar from "expo-status-bar/src/ExpoStatusBar";
import RestaurantsScreen from "./src/resturants/screens/restaurants.screens";




export default function App() {
    return (
        <>
            <RestaurantsScreen />
            <ExpoStatusBar style="auto"/>
        </>
    );
}


const styles = StyleSheet.create({

});
