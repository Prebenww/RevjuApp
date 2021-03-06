import React from "react";
import {Text, StyleSheet} from "react-native";
import {Card} from "react-native-paper"
import styled from "styled-components/native"


const Title = styled.Text`
    padding: 16px;
    
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {

    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://images.moneycontrol.com/static-mcnews/2021/01/Bitcoin-1-770x433.jpg?impolicy=website&width=770&height=431"
        ],
        address = "Dalavegen 52",
        isOpenNow = true,
        openingHours,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Title style={styles.title}>{name}</Title>
        </Card>
    );


};

    const styles = StyleSheet.create({
        card: {
            backgroundColor: "white"
        },
        cover: {
            padding: 20,
            backgroundColor: "white"
        },
    })