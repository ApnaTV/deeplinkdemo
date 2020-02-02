/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'react-native-firebase';

export default class App extends React.Component{

componentDidMount = async() => {
    let url = await firebase.links().getInitialLink();
    console.log('incoming url', url);
}


render(){

  return(
    <View style={{flex:1}}></View>
) 

}

}
