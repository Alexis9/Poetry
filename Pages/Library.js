import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Library extends Component {
  navigation = null;
  constructor(props) {
    super(props);
    navigation = this.props.navigation
  }
  render() {
    return (
      <View style={styles.container}>
  
        <View style={styles.boxStyle}>
          <TouchableOpacity 
            onPress = {() => {navigation.navigate('TangShiList', {})}}> 
            <View style={styles.bookBox}>
              <Image source={require('../image/libai.jpg')} style={styles.bookImg}/>
              <Text style={styles.TextStyle}>唐诗三百首</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxStyle}>
        <TouchableOpacity 
          onPress = {() => {navigation.navigate('SongCiList', {})}}> 
          <View style={styles.bookBox}>
            <Image source={require('../image/liqingzhao.jpg')} style={styles.bookImg}/>
            <Text style={styles.TextStyle}>宋词三百首</Text>
          </View>
          </TouchableOpacity>
        </View>

    </View>
    );
  }
}
const styles =  StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"#e9f5ee"
  },
  boxStyle:{
    flex:1,
    borderColor:"#e9f5ee",
    borderBottomColor:"#d5ded9",
    borderWidth:1,
    justifyContent: 'center',
    backgroundColor:"#e9f5ee"
  },
  TextStyle:{
    fontSize:20,
    color:"#3b0208",
    letterSpacing:10
  },
  bookImg:{
    width:400,
    height:225,
    resizeMode:"contain",
    marginBottom:20,
    borderRadius:10
  },
  bookBox:{
    width:400,
    height:300,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent: 'center',
    borderRadius:10
  }
})
