import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  welcome_message: {
    fontSize: 60,
    textAlign: 'center',
    color: 'dimgray'
  },
  subWelcome_message: {
    fontSize: 36,
    color: 'lightslategray'
  },
  welcome_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  }
});

module.exports = styles;