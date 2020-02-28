import React, { Component } from 'react';
import { TextInput, View ,Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../Styles/Home/Home.component.style';
import NoteInput from '../NoteInput/NoteInput.component.js'

class Home extends Component {
  render() {
    return (
    <View style = {styles.container} >
      <NoteInput/>
    </View>
  )
  }
}

export default Home;
