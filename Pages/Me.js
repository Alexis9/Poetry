import React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';

type Props = {};
export default class Me extends Component<Props> {
  navigation = null;
  constructor(props) {
    super(props);
    navigation = this.props.navigation

    this.state = {
      isLogined : false,
      name:"请登录"
    }
  }
  returnData( name) {
    this.setState({name: name});
    }
  render() {
      return (
          <ImageBackground
            source={require('../image/bg.jpg')} 
            style={styles.bgImgStyle}>
            < TouchableOpacity 
              onPress = {
                () => {
                  navigation.navigate('Login', {
                    returnData: this.returnData.bind(this)
                  })
                }
              }>
                  <View style={styles.TouchableBox}>
                    <Image source={require('../image/b.png')} style={styles.headImgStyle}/>
                    <View style={styles.textBoxStyle}>
                      <Text style={styles.textStyle}>{this.state.name}</Text>
                    </View>
                  </View>
            </TouchableOpacity>   
            </ImageBackground>
    )
    }
    }
const styles = StyleSheet.create({
  bgImgStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    resizeMode: "contain"
  },
  TouchableBox: {
    width:400,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 20,
    marginTop: 20,
    borderRadius: 10
  },
  headImgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textBoxStyle: {
    marginLeft: 50,
    alignItems: "center",
    justifyContent: 'center',
    
  },
  textStyle: {
    fontSize: 16,
    color: "#000",
    letterSpacing: 5
  },
})