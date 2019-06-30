import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: this.props.image}} />
          <Text style={styles.text}>This is card {this.props.name}</Text>
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
  })