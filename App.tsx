import { AsyncStorage, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Card from './components/card';
//import cards0 from './data/cards0.json';
// import cards1 from './data/cards1.json';
// import cards2 from './data/cards2.json';
// import cards3 from './data/cards3.json';
// import cards4 from './data/cards4.json';
// import cards5 from './data/cards5.json';
// import cards6 from './data/cards6.json';
// import cards7 from './data/cards7.json';
// import cards8 from './data/cards8.json';
// import cards9 from './data/cards9.json';
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

/*
const cards2 = [
  { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
]
*/

type MyProps = {};
type MyState = { cards: any[], outOfCards: boolean };
export default class App extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<MyProps>) {
    super(props);
    this.importCards0 = this.importCards0.bind(this);
    this.importCards1 = this.importCards1.bind(this);
    this.importCards2 = this.importCards2.bind(this);
    this.importCards3 = this.importCards3.bind(this);
    this.importCards4 = this.importCards4.bind(this);
    this.importCards5 = this.importCards5.bind(this);
    this.importCards6 = this.importCards6.bind(this);
    this.importCards7 = this.importCards7.bind(this);
    this.importCards8 = this.importCards8.bind(this);
    this.importCards9 = this.importCards9.bind(this);
    this.funcMap = {
      '0': this.importCards0,
      '1': this.importCards1,
      '2': this.importCards2,
      '3': this.importCards3,
      '4': this.importCards4,
      '5': this.importCards5,
      '6': this.importCards6,
      '7': this.importCards7,
      '8': this.importCards8,
      '9': this.importCards9
  };

    this.state = {
      cards: [],
      outOfCards: false,
      currentIndex: 0,
      loadedModules: []
    }

    console.log(`constructor`);

    this._retrieveCurrentIndex2();
    const index = Math.floor(this.state.currentIndex/1000);
    (this.funcMap[index.toString()])();
    this.state.loadedModules.push(index);
    console.log(`loadedModules: ${this.state.loadedModules}`)
  }

  async componentDidMount() {
    debugger;
    console.log(`componentDidMount`);

    const index = Math.floor(this.state.currentIndex/1000);
    if(index <= 8){
       await (this.funcMap[(index+1).toString()])();
       this.setState({ loadedModules: [...this.state.loadedModules, ...[index+1]] });
       console.log(`loadedModules: ${this.state.loadedModules}`)
     }
     if(index >= 1){
       await (this.funcMap[(index-1).toString()])();
       this.setState({ loadedModules: [...this.state.loadedModules, ...[index-1]] });
       console.log(`loadedModules: ${this.state.loadedModules}`)
     } 

    for (const key in this.funcMap) {
      if (!this.state.loadedModules.includes(Number(key))) {
        await this.funcMap[key.toString()]();
        this.setState({ loadedModules: [...this.state.loadedModules, ...[key]] });
        console.log(`loadedModules: ${this.state.loadedModules}`)
        }
    }
  }

  _retrieveCurrentIndex2() {
    AsyncStorage.getItem("savedCurrentIndex").then((value) => {
      this.setState({currentIndex: Number(value)});
    });
  };

  async importCards0() {
    const cards = (await import('./data/cards0.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 0): ${this.state.cards.length}`)
  }

  async importCards1() {
    const cards = (await import('./data/cards1.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 1): ${this.state.cards.length}`)
  }
  async importCards2() {
    const cards = (await import('./data/cards2.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 2): ${this.state.cards.length}`)
  } async importCards3() {
    const cards = (await import('./data/cards3.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 3): ${this.state.cards.length}`)
  } async importCards4() {
    const cards = (await import('./data/cards4.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 4): ${this.state.cards.length}`)
  } async importCards5() {
    const cards = (await import('./data/cards5.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 5): ${this.state.cards.length}`)
  } async importCards6() {
    const cards = (await import('./data/cards6.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 6): ${this.state.cards.length}`)
  } async importCards7() {
    const cards = (await import('./data/cards7.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 7): ${this.state.cards.length}`)
  } async importCards8() {
    const cards = (await import('./data/cards8.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 8): ${this.state.cards.length}`)
  } async importCards9() {
    const cards = (await import('./data/cards9.json')).default;
    this.setState({ cards: [...this.state.cards, ...cards] });
    console.log(`count of cards (from 9): ${this.state.cards.length}`)
  }

  /*
  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }*/

  /*
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
  */

  render() {
    console.log(`render`);
    return (
      <SwipeCards
        // handleNope={this.handleNope}
        // handleYup={this.handleYup}
        //cardRemoved={this.cardRemoved.bind(this)}
        cards={this.state.cards}
        loop={true}
        renderCard={(cardData: any) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showNope={false}
        showYup={false}
        stackOffsetY={100}
      />
    )
  }
}