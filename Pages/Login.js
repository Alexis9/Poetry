import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

const userName = 'jyy';
const PWD = '123';
export default class Login extends Component {
  navigation = null;
  constructor(props) {
    super(props);
    navigation = this.props.navigation
    this.state = {
      inputedNum: '',
      inputedPW: null,
    }
  }
  updateNum(newText) {
    this.setState({
      inputedName: newText,
    });
  }

  updatePwd(newText) {
    this.setState({
      inputedPW: newText,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../image/ic_poetry.png')} style={styles.logoStyle}></Image>  
        </View>
        <View style={styles.formStyle}>
          <Text style={styles.titleStyle}>账号</Text>
          <TextInput style = {styles.textInputStyle}
            underlineColorAndroid='transparent' 
            placeholder={'请输入用户名'}
            onChangeText = {(newText)=>this.updateNum(newText)}>
          </TextInput>
        </View>
        <View style={styles.formStyle}>
          <Text style={styles.titleStyle}>密码</Text>
          <TextInput style={styles.textInputStyle}
          underlineColorAndroid='transparent'
            placeholder={'请输入密码'}
            secureTextEntry={true}
            onChangeText = {(newText)=>this.updatePwd(newText)}>
          </TextInput>
        </View>
        <View>
          <TouchableOpacity onPress ={
            () => {
              if (this.state.inputedName == userName && this.state.inputedPW == PWD) {
                navigation.state.params.returnData('jyy', 'Name ');
                navigation.goBack();
              } else {
                alert("用户名或密码有误")
              }
            }
          }>
            <View style = {styles.buttonStyle}>
              <Text style={styles.loginButton}>
              登录
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTipStyle}>
          <View style={styles.forgetPWd}>
            <TouchableOpacity onPress={() => {alert("忘记密码？")}}><Text>忘记密码？</Text></TouchableOpacity>
          </View>
          <View style={styles.register}>
            <TouchableOpacity onPress={() => {alert("注册")}}><Text>注册</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"column",
    backgroundColor:"#fff"
  },
  logoStyle:{
    width:100,
    height:100,
    marginBottom:20,
    marginTop:40
  },
  formStyle:{
    flexDirection:'row',
    alignItems:'center',
    borderColor:"#fff",
    borderBottomColor:"#d5ded9",
    borderWidth:1,
    width:"90%",
    padding:8
  },
  titleStyle:{
    color:"#000",
    fontSize:18,
  },
  textInputStyle: {
    width:300,
    fontSize: 16,
    marginLeft:50
  },
  buttonStyle: {
    width:300,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    borderRadius:8,
    borderColor:"#263643",
    borderWidth:2
  },
  loginButton:{
    color:"#263643",
    fontSize:18
  },
  bottomTipStyle:{
    flexDirection:"row",
    marginTop:10
  },
  register:{
    marginLeft:170
  },
});
