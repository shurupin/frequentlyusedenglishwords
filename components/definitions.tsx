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


    render() {
        const { statePropertyExample } = this.state;
        const { definitions } = this.props;
        return <View>{definitions.map(x => this.getTexts(x.definition))}</View>;
    }
}
