/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 200);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '✡').join('~')}
        </Text>
      </ScrollView>
    );
  }
}

class ArenaWatcher extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'purple'}} />
          <View style={{flex: 1, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, backgroundColor: 'steelblue'}} />
          <View style={{flex: 1, backgroundColor: 'purple'}} />
          <View style={{flex: 1, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{flex: 2, height: 5, backgroundColor: 'powderblue'}}>
          <Text style={styles.welcome}>
          Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload(Tho you don't have a keyboard...'),{'\n'}
            Shake or press menu button for dev menu
          </Text>
         </View>
        <View style={{flex: 2}}>
          <Image source={pic} style={{flex: 1}}/>
        </View>
        <View style={{flex: 0.5, alignItems: 'center', backgroundColor: 'steelblue'}}>
          <Greeting name='Alon' />
          <Blink text='I love to blink' />
        </View>
        <View style={{flex: 3, alignItems: 'stretch', backgroundColor: 'lightcyan'}}>
          <PizzaTranslator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    textShadowColor: '#D6C1DB',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height: 2}
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ArenaWatcher', () => ArenaWatcher);