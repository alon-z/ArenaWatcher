import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

class WelcomePage extends Component {
    render() {
        return ( 
            <View style={styles.welcome_view}>
                <Text style={styles.welcome_message}>Weolcome</Text>
                <Text style={[styles.welcome_message, styles.subWelcome_message]}>Arena Watcher</Text>
            </View>
        );
    }
}

module.exports = WelcomePage;