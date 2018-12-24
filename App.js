import React, {
    Component
  } from 'react';
  
  import {
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
  
  type Props = {};
  export default class App extends Component<Props> {
    navigation = null;
    constructor(props) {
      super(props);
      navigation = this.props.navigation
    }
    render() {
      return (
          < View >
            < TouchableOpacity onPress = {
              () => {
                navigation.navigate('Login', {
                  name: "12345 "
                })
              }
            } >
              <Text>登录</Text>
            </TouchableOpacity>
          </View>
      );
    }
  }
  