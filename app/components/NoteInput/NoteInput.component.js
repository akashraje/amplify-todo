import React, { Component } from 'react';
import {
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

import PropTypes from 'prop-types';

import styles from '../../Styles/NoteInput/NoteInput.components.style.js'

class NoteInput extends Component {
  state = {
    text : ''
  }

  render() {
    const {...extraProps} = this.props;
    return (
      <View
        flexDirection = {'row'}
        >
      <TextInput
        flexGrow = {3}
        {...extraProps}
        style = { [styles.textInputStyle, extraProps.style] }
        editable =  { true }
        onChageText = { text => {
            console.log(text)
            this.setState({text})
          }
        }
      />

      <Button
        flexGrow = {1}
        title = "Add"
        onPress = { () => {
              console.log("tasdasdext")
              Alert.alert(this.state.text)
            }
          }
      />

      </View>


    )
  }
}

export default NoteInput;
