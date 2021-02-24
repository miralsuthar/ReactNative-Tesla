import React from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../StyledButton/styles';

const StyledButton = ({type, buttonName, onPress}) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={[styles.text, {color: textColor}]}>{buttonName}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;