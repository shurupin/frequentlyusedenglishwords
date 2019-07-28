import { Audio } from 'expo-av';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Definitions from './definitions'
import React from 'react';

type TCardProps = {
  uk: string,
  us: string,
  d: { d2: any[], e2: any[] }[],
  handleWordClick: (id: number, word: string) => void,
  l: string,
  n: string,
  p: string,
  t: string,
  w: string,
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
      uk,
      us,
      d,
      handleWordClick,
      l,
      n,
      p,
      t,
      w,
      isConnected,
    } = this.props;

    //const backgroundColors = ['lavender', 'dodgerblue', 'cornflowerblue',];
    //const randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    return (
      <View style={[styles.card/*, { backgroundColor: randomBackgroundColor }*/]}>
        {/* <Image style={styles.thumbnail} source={{uri: this.props.image}} /> */}
        <Text style={styles.word}>{w}</Text>
        <Text style={styles.text}>{n}</Text>
        <Text style={styles.text}>{t}</Text>
        {!!p && <Text style={styles.text}>{p}</Text>}
        {!!l && <Text style={styles.text}>{l}</Text>}
        <Definitions definitions={d} handleWordClick={handleWordClick} />
        {!!isConnected && !!uk && <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(`/media/english/uk_pron/${uk}`)}>
          <Text style={styles.buttonText}>Play UK</Text>
        </TouchableOpacity>}
        {!!isConnected && !!us && <TouchableOpacity style={styles.button} onPress={() => this._playAndPause(`/media/english/us_pron/${us}`)}>
          <Text style={styles.buttonText}>Play US</Text>
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