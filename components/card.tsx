import { Audio } from 'expo-av';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Definitions from './definitions'
import React from 'react';

type TCardProps = {
  audioUK: string,
  audioUS: string,
  definitions: { definition: string, examples: string[], definition2: any[], examples2: any[] }[],
  handleWordClick: (id: number, word: string) => void,
  level: string,
  number: string,
  partOfSpeech: string,
  transcription: string,
  word: string,
  isConnected: boolean,
};

type TCardState = {
  backgroundColor: string,
};

export default class Card extends React.Component<TCardProps, TCardState> {
  constructor(props: Readonly<TCardProps>) {
    super(props);
  }

  _playAndPause = (audioUri: string) => {
    this._playRecording(audioUri);
  }

  async _playRecording(audioUri: string) {
    const source = { uri: 'https://dictionary.cambridge.org' + audioUri };
    const { sound } = await Audio.Sound.createAsync(
      source,
      {
        isLooping: false,
        shouldPlay: true,
      },
      null,
    );
  }

  /*   handleWordClick = (word: string) => {
      this.props.handleWordClick(word);
    } */

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
      isConnected,
    } = this.props;

    //const backgroundColors = ['lavender', 'dodgerblue', 'cornflowerblue',];
    //const randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    return (
      <View style={[styles.card/*, { backgroundColor: randomBackgroundColor }*/]}>
        {/* <Image style={styles.thumbnail} source={{uri: this.props.image}} /> */}
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.text}>{number}</Text>
        <Text style={styles.text}>{transcription}</Text>
        {partOfSpeech && <Text style={styles.text}>{partOfSpeech}</Text>}
        <Text style={styles.text}>{level}</Text>
        <Definitions definitions={definitions} handleWordClick={handleWordClick} />
{/*         <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => handleWordClick(-1, "test")}>
            Word
            </Text>
        </TouchableOpacity> */}
        {isConnected && audioUK && <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(audioUK)}>
          <Text style={styles.buttonText}>
            Play UK
            </Text>
        </TouchableOpacity>}
        {isConnected && audioUS && <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(audioUS)}>
          <Text style={styles.buttonText}>
            Play US
            </Text>
        </TouchableOpacity>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    elevation: 1,
    marginTop: '0.75%',
    //marginBottom: '1%',
    maxHeight: '99%',
    maxWidth: '97%',
    minHeight: '99%',
    minWidth: '97%',
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