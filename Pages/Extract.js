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

import {StackNavigator} from 'react-navigation';
import twentyTangPeotry from '../LocalData/getTangPoetry.json'

type Props = {};
export default class Extract extends Component<Props>  {
  navigation = null;
  constructor(props) {
    super(props);
    navigation = this.props.navigation
    this.state = {
      data: twentyTangPeotry.result
    }
  }

  componentDidMount() {
    fetch('https://v2.jinrishici.com/one.json', {
        method: 'GET',
        credentials: 'include'
      })
      .then(Response => Response.json())
      .then(responseData => {
        if (responseData.status == "success") {
          this.setState({
            data: responseData.data
          });
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    data = this.state.data
    return (
        <View style={styles.container}>
            < TouchableOpacity onPress = {
              () => {
                if (this.state.data) {
                  navigation.navigate('OnePoetryDetail', {
                    origin: data.origin,
                    matchTags: data.matchTags,
                    cacheAt: data.cacheAt,
                  })
                } else {
                  alert("暂无数据");
                }
              }
            } >
                <View style={styles.tipStyle}>
                  <Text style={styles.textStyle}>{data.content}</Text>
                </View>
            </TouchableOpacity>
          <View style={styles.matchTagsBox}>
              <FlatList
                data={data.matchTags}
                horizontal={true}
                renderItem={({item}) => <View style={styles.tags}><Text style={styles.tagsText}>{item}</Text></View>}
                />
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:"#e9f5ee"
  },
  tipStyle: {
    width: 350,
    height: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
    letterSpacing: 3,
    color: "#3b0208"
  },
  matchTagsBox: {
    flexDirection:"row",
    width: 320,
    marginTop: 10,
    alignItems:"center",
    justifyContent: 'center',
  },
  tags: {
    backgroundColor: "#c23b35",
    margin: 10,
    padding: 5,
    width: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tagsText: {
    color:"#fff"
  }
})
