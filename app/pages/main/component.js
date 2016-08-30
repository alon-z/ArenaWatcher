import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

class MainPage extends Component {
    render() {
        return ( 
            <View style={styles.welcome_view}>
                <Text style={styles.welcome_message}>HELLOOO</Text>
                <Text style={[styles.welcome_message, styles.subWelcome_message]}>This is the main page!</Text>
            </View>
        );
    }
}

module.exports = MainPage;