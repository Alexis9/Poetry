import {
    AppRegistry,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'
import React from 'react';

import App from './App';
import Extract from './Pages/Extract';
import Library from './Pages/Library';
import Me from './Pages/Me';
import OnePoetryDetail from './Pages/OnePoetryDetail';
import Login from './Pages/Login';
import TangShiList from './Pages/TangShiList';
import SongCiList from './Pages/SongCiList';
import PoetriesDetail from './Pages/PoetriesDetail';

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
})

const Main = TabNavigator({
    page1: {
        screen: Extract,
        navigationOptions: {
            tabBarLabel: '摘录',
            tabBarIcon: ({
                focused
            }) => {
                if (focused) {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/tipSel.png')
                        }
                        />
                    )
                } else {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/tips.png')
                        }
                        />
                    );
                }
            }
        }
    },

    page2: {
        screen: Library,
        navigationOptions: {
            tabBarLabel: '书库',
            tabBarIcon: ({
                focused
            }) => {
                if (focused) {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/bookBaseSel.png')
                        }
                        />
                    )
                } else {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/bookBase.png')
                        }
                        />
                    );
                }
            }
        }
    },
    page3: {
        screen: Me,
        navigationOptions: {
            tabBarLabel: '我',
            tabBarIcon: ({
                focused
            }) => {
                if (focused) {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/meSel.png')
                        }
                        />
                    )
                } else {
                    return ( <
                        Image style = {
                            styles.tabBarIcon
                        }
                        source = {
                            require('./image/me.png')
                        }
                        />
                    );
                }
            }
        }
    }
}, 
{
    initialRouteName:"page1",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#cdcdcd',
        style: {
            backgroundColor: '#fff',
            height: 60
        },
        showIcon: true,
    },
});

const simpleApp = StackNavigator({
    main: {
        screen: Main
    },
    page1: {
        screen: Extract,
          
    },
    OnePoetryDetail: {
        screen: OnePoetryDetail
    },
    Login: {
        screen: Login
    },
    SongCiList: {
        screen: SongCiList
    },
    TangShiList: {
        screen: TangShiList
    },
    PoetriesDetail: {
        screen: PoetriesDetail
    }
},
{
    headerMode:"none"
});

AppRegistry.registerComponent('Poetry', () => simpleApp);
// AppRegistry.registerComponent('Poetry', () => Me);

