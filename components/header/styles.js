import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
container : {
position : 'absolute',
top : 50,
right : 10 ,
zIndex : 100,
flexDirection : 'row',
justifyContent : 'space-between',
paddingHorizontal : 20,
},
logo : {
width : 100,
height : 50,
resizeMode : 'contain'
},
});
export default styles;