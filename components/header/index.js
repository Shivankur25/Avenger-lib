import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            

        </View>
    );
};
export default Header