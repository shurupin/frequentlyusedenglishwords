import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type TDefinitionsProps = {
    definitions: Array<{ definition: string, examples: Array<string> }>,
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

    onTextPress = (e, str) => {
        console.log(str);
    }

    getTexts = (definition: string) => {
        return <Text key={definition}>{definition.split(' ').map((word, index) => {
            return (
                <Text key={index} onPress={(e) => this.onTextPress(e, word)}>
                    {`${word}${index !== (definition.split(' ').length - 1) ? ' ' : '\n'}`}
                </Text>
            )
        })}</Text>;
    }


    render() {
        const { statePropertyExample } = this.state;
        const { definitions } = this.props;
        return <Text>{definitions.map(x => this.getTexts(x.definition))}</Text>;
    }
}
