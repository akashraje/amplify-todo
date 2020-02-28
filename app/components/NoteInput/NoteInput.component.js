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
    inputTxt : ''
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
        onChangeText = { text =>  {
          this.setState({inputTxt: text})
        }
       }
      />

      <Button
        flexGrow = {1}
        title = "Add"
        onPress = { () => {
              Alert.alert(this.state.inputTxt)
            }
          }
      />

      </View>
    )
  }
}

export default NoteInput;
