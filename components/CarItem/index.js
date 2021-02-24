import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import StyledButton from '../StyledButton/index';
import styles from './styles';

const CarItem = ({source, title, tagline}) => {
    return(
            <View style={styles.carContainer}>
                <ImageBackground source={source} style={styles.image} />
                <View style={styles.titles}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{tagline}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton type="primary" buttonName="Custom Order" onPress={() => {
                        console.warn("Custom Order was Pressed");
                    }} />
                    <StyledButton type="secondary" buttonName="Existing Inventory" onPress={() => {
                        console.warn("Existing Inventory was Pressed");
                    }} />
                </View>
            </View>
    );
};

export default CarItem;