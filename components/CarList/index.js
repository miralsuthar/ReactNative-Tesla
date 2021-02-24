import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarList = (props) => {
    return(
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={(({item}) => <CarItem key={item.id} source={item.image} title={item.name} tagline={item.tagline} /> )}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarList;