import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Card from './components/card'
import cards from './data/cards.json';
import NoMoreCards from './components/noMoreCards'
import React, { Fragment } from 'react';
import SwipeCards from './components/swipeCards'

/* const cards = [
  {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
] */

const cards2 = [
  { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
]

type MyProps = {};
type MyState = { cards: any, outOfCards: boolean };
export default class App extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<MyProps>) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  /*
  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }*/

  cardRemoved(index: number) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
    }
  }

  render() {
    return (
      <Fragment>
        <TextInput
          style={styles.textInput}
          placeholder="enter word or number"
          maxLength={20}
        />
        <SwipeCards
          // handleNope={this.handleNope}
          // handleYup={this.handleYup}
          cardRemoved={this.cardRemoved.bind(this)}
          cards={this.state.cards}
          loop={true}
          renderCard={(cardData: any) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showNope={false}
          showYup={false}
          stackOffsetY={100}
        />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  }  
})