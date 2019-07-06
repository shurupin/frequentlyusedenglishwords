import { Audio } from 'expo';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Definitions from './definitions'
import React from 'react';

type TCardProps = {
  audioUK: string,
  audioUS: string,
  definitions: { definition: string, examples: string[], definition2: any[], examples2: any[] }[],
  handleWordClick: (word: string) => void,
  level: string,
  number: string,
  partOfSpeech: string,
  transcription: string,
  word: string,
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
        isLooping: false,
        shouldPlay: true,
      },
      null,
    );
  }

  handleWordClick = (word: string) => {
    this.props.handleWordClick(word);
  }

  render() {
    const { 
      audioUK, 
      audioUS,
      definitions, 
      handleWordClick, 
      level, 
      number, 
      partOfSpeech, 
      transcription, 
      word, 
     } = this.props;

    return (
      <View style={styles.card}>
        {/* <Image style={styles.thumbnail} source={{uri: this.props.image}} /> */}
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.text}>Number: {number}</Text>
        <Text style={styles.text}>transcription: {transcription}</Text>
        <Text style={styles.text}>partOfSpeech: {partOfSpeech}</Text>
        <Text style={styles.text}>level: {level}</Text>
        <Definitions definitions={definitions} handleWordClick={handleWordClick} />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => this.handleWordClick("Word!!!")}>
            Word
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(audioUK)}>
          <Text style={styles.buttonText}>
            Play UK
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(audioUS)}>
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
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    elevation: 1,
    marginTop: '6%',
    maxHeight: '96%',
    maxWidth: '98%',
    minHeight: '96%',
    minWidth: '98%',
    overflow: 'hidden',
  },
  thumbnail: {
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50 / 1.618,
    justifyContent: 'center',
    margin: 5,
    width: 50,
  },
  buttonText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  }
})