import React from 'react';
import { View ,Text ,FlatList ,Dimensions} from 'react-native';
import Profileinfo from "../profile";
import styles from './styles';
import profiledetail from './profile';
const profileList = (props) => {
    return (
        <View style = {styles.container}>
           <FlatList
            data = {profiledetail}
            renderItem = {({item}) => <Profileinfo detail = {item}/>}
            snapToAlignment = {'start'}
            decelerationRate = {'fast'}
            snapToInterval = {Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
           />
        </View>

    );
};
export default profileList;