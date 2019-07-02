import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo';
import Definitions from './definitions'

type TCardProps = {
  word: string,
  number: string,
  transcription: string,
  partOfSpeech: string,
  level: string,
  audioUK: string,
  audioUS: string,
  definitions: Array<{ definition: string, examples: Array<string> }>,
  handleWordClick: (word: string) => void,
};

type TCardState = {
  statePropertyExample: boolean,
};

export default class Card extends React.Component<TCardProps, TCardState> {
  constructor(props: Readonly<TCardProps>) {
    super(props);
  }

  _playAndPause = (audioUri: string) => {
    this._playRecording(audioUri);
  }

  async _playRecording(audioUri: string) {
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

  handleWordClick = (word: string) => {
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
        <Definitions definitions={this.props.definitions} />
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
    minWidth: '95%',
    maxWidth: '95%',
    minHeight: '95%',
    maxHeight: '95%',
    marginTop: '7%',
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