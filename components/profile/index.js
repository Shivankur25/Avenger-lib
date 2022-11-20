import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Styledbutton from '../styleButton';
const profile = (props) => {


  const { name, realname, image } = props.detail;
  return (
    <View style={styles.avengecontainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}> {realname} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Styledbutton type="primary"
          content={"About"}
          onPress={() => {
            console.warn('About')
          }}
        />
        <Styledbutton type="secondary"
          content={"Series"}
          onPress={() => {
            console.warn('Series')
          }}
        />
      </View>
    </View>
  );
};

export default profile;