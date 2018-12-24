import React, {
    Component
} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import twentyTangPeotry from '../LocalData/getTangPoetry.json'
export default class TangShiList extends Component {
    navigation = null;
    constructor(props) {
        super(props);
        navigation = this.props.navigation
        this.state = {
            data: twentyTangPeotry.result
        }
    }
      _renderItem({item}){
          let content = item.content;
          let contentArr = content.split("|");
          let OneSentence = ""
          contentArr.forEach((element, index, arr) => {
              OneSentence = arr[0]
          });
          return(
              < TouchableOpacity
              onPress = {
                  () => {
                      navigation.navigate('PoetriesDetail', {
                          title: item.title,
                          authors: item.authors,
                          content: item.content
                      })
                  }
              } >
                <View style={styles.APoetryBox}>
                    <View style={styles.titleAndOneSentenceBox}>
                        <View  style={styles.titleStyle}>
                            <Text style={styles.titleTextStyle}>{item.title}</Text>
                        </View>
                        <View  style={styles.OneSentenceStyle}>
                            <Text style={styles.OneSentenceTextStyle}>{OneSentence}</Text>
                        </View>
                    </View>
                    <View style={styles.authorBox}>
                        <View  style={styles.authorStyle}>
                            <Text style={styles.authorsextStyle}>{item.authors}</Text>
                        </View>
                    </View>
                </View>
              </TouchableOpacity>
          )
      }

    render() {
        const {params}=this.props.navigation.state;
        return (
            <View style={styles.container}>
              <FlatList
               data={this.state.data}
               renderItem={this._renderItem}
              />
            </View>
        );
    }
  }
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding:5
    },
    APoetryBox: {
        flexDirection: "row",
        padding: 10,
        borderColor: "#fff",
        borderBottomColor: "#d5ded9",
        borderWidth: 1,
    },
    OneSentenceStyle: {
        marginTop: 10
    },
    authorBox: {
        position: "absolute",
        right: 20,
        top: 10
    },
    titleTextStyle:{
        color:"#000",
        fontSize:16

    },
})
