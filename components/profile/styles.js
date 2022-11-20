import { StyleSheet ,Dimensions} from 'react-native';
const styles = StyleSheet.create({
    avengecontainer: { 
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
      },
      titles: {
        marginTop : '10%',
        width : '100%',
        alignItems : 'baseline',
        padding: 10 ,
      },
      title : {
        fontSize : 40 ,
        fontWeight : '500',
        color : 'yellow'
      },
      subtitle : {
        fontSize : 25 ,
        color : 'yellow',
      },
      image : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
        resizeMode : 'cover',
        position : 'absolute'
      },
      buttonContainer : {
        position : 'absolute',
        bottom : 50 ,
        width : '100%',
      }

});
export default styles;