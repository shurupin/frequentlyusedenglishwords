import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo';

const source = {
  uri: 'https://dictionary.cambridge.org/media/english-russian/uk_pron_ogg/u/ukh/ukhef/ukheft_029.ogg',
};

export default class Card extends React.Component {
    constructor(props) {
      super(props);
    }

    _playAndPause = () => {
      this._playRecording();
    }

    async _playRecording() {
      const { sound } = await Audio.Sound.create(
        source,
        {
          shouldPlay: true,
          isLooping: false,
        },
        null,
      );
    }
  
    render() {
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: this.props.image}} />
          <Text style={styles.text}>This is card {this.props.name}</Text>
          <TouchableOpacity style={styles.button} onPress={this._playAndPause}>
            <Text style={styles.buttonText}>
              Playing
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'grey',
      backgroundColor: 'white',
      borderWidth: 1,
      elevation: 1,
      minWidth: '90%',
      minHeight: '90%',
    },
    thumbnail: {
      width: 300,
      height: 300,
    },
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    button: {
      width: 256,
      height: 256 / 1.618,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
  })