import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo';
import Definitions from './definitions'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  _playAndPause = (audioUri) => {
    this._playRecording(audioUri);
  }

  async _playRecording(audioUri) {
    const source = { uri: audioUri };
    const { sound } = await Audio.Sound.create(
      source,
      {
        shouldPlay: true,
        isLooping: false,
      },
      null,
    );
  }

  handleWordClick = (word) => {
    this.props.handleWordClick(word);
  }

  render() {
    return (
      <View style={styles.card}>
        {/* <Image style={styles.thumbnail} source={{uri: this.props.image}} /> */}
        <Text style={styles.text}>Word: {this.props.word}</Text>
        <Text style={styles.text}>Number: {this.props.number}</Text>
        <Text style={styles.text}>transcription: {this.props.transcription}</Text>
        <Text style={styles.text}>partOfSpeech: {this.props.partOfSpeech}</Text>
        <Text style={styles.text}>level: {this.props.level}</Text>
        <Definitions style={styles.card} definitions={this.props.definitions} />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => this.handleWordClick("Word!!!")}>
            Word
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(this.props.audioUK)}>
          <Text style={styles.buttonText}>
            Play UK
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(this.props.audioUS)}>
          <Text style={styles.buttonText}>
            Play US
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
    maxWidth: '90%',
    minHeight: '90%',
    maxHeight: '100%',
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
    width: 50,
    height: 50 / 1.618,
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