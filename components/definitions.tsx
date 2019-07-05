import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type TDefinitionsProps = {
    definitions: Array<{ definition: string,
    examples: Array<string>,
    definition2: Array<{word: string, id?: number}>}>
};

type TDefinitionsState = {
    statePropertyExample: boolean,
};

export default class Definitions extends React.Component<TDefinitionsProps, TDefinitionsState> {
    static defaultProps: Partial<TDefinitionsProps> = {
        definitions: [],
    };

    state = {
        statePropertyExample: false
    };

    onTextPress = (_e: any, str: string) => {
        console.log(str);
    }

    getTexts = (definition: string) => {
        const words = definition.split(' ');
        return <Text key={definition}>{words.map((word, index) => {
            return (
                <Text key={index} onPress={(e) => this.onTextPress(e, word)}>
                    {`${word}${index !== (words.length - 1) ? ' ' : ''}`}
                </Text>
            )
        })}</Text>;
    }
    
    onTextPress2 = (_e: any, item: {word: string, id?: number}) => {
        console.log(`word: ${item.word}, id: ${item.id}`);
    }

    getTexts2 = (definition2: Array<{word: string, id?: number}>) => {
        //const words = definition2;
        return <Text key={Math.random()}>{definition2.map((item, index) => {
            return (
                <Text key={index} onPress={(e) => this.onTextPress2(e, item)}>
                    {`${item.word}${index !== (definition2.length - 1) ? ' ' : ''}`}
                </Text>
            )
        })}</Text>;
    }


    render() {
        const { statePropertyExample } = this.state;
        const { definitions } = this.props;
        return <View style={styles.definitions}>{definitions.map(x => this.getTexts2(x.definition2))}</View>;
    }
}

const styles = StyleSheet.create({
    definitions: {
      minWidth: '96%',
      maxWidth: '96%',
    },
  })