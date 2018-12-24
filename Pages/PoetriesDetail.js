import React, {
  Component
} from 'react';
import {
  StackNavigator
} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

type Props = {};
export default class OnePoetryDetail extends Component<Props> {
  _renderContentItem({item}){
    return(
      <Text style={styles.textStyle}>{item} </Text>
    )
  }
render(){
    const {params}=this.props.navigation.state;
    let content = params.content;
    let contentArr = content.split("|") ;
    return (
        <View style={styles.container}>
        <View style={styles.detailsStyle}>
            <Text style={styles.titleStyle}>{params.title} </Text>
            <Text style={styles.authorsStyle}>{params.authors} </Text>
            <FlatList
                data={contentArr}
                renderItem={this._renderContentItem}
                />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:"#fff",
    flex:1
  },
  detailsStyle: {
    width: "92%",
    height: "95%",
    backgroundColor: "#fff9eb",
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
    borderRadius:10
  },
  textStyle: {
    color: "#000",
    margin: 5,
    fontSize:16
  },
  titleStyle: {
    color: "#000",
    fontSize: 18,
    margin: 5
  },
  authorsStyle: {
    color: "#000",
    fontSize: 16,
    margin: 10
  }
})
