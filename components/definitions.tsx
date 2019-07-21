import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type TDefinitionsProps = {
    definitions: ({ definition: string, examples: string[], definition2: ({ word: string, id?: number })[], examples2: ({ word: string, id?: number }[])[] })[],
    handleWordClick: (id: number, word: string) => void,
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

    onTextPress2 = (_e: any, item: { word: string, id?: number }) => {
        console.log(`word: ${item.word}, id: ${item.id}`);
    }

    getTexts2 = (definition: { definition2: any, examples2: any[] }, definitionIndex: number) => {
        const { definition2, examples2 } = definition;
        const { handleWordClick } = this.props;
        return <Fragment key={Math.random()}>
            <Text key={Math.random()}>
                {definition2.map((item: { word: string; id: number; }, index: number) => {
                    return (
                        <Text key={Math.random()} style={item.id != null && item.id >= 0 ? styles.hasLink : styles.hasNoLink} onPress={() => handleWordClick(item.id, item.word)}>
                            {`${item.word}`}
                        </Text>
                    )
                })}
            </Text>
            {examples2 && examples2.length > 0 &&
                <Fragment key={Math.random()}>
                    {examples2.map((example: any[], index: number) => {
                        return <Text key={Math.random()}>{example.map((item: { word: string; id: number; }, index: number) => {
                            return (
                                <Text key={Math.random()} style={[item.id != null && item.id >= 0 ? styles.hasLink : styles.hasNoLink, {fontStyle: 'italic'}]} onPress={() => handleWordClick(item.id, item.word)}>
                                    {`${item.word}`}
                                </Text>
                            )
                        })}</Text>
                    })}
                </Fragment>}
        </Fragment>;
    }

    render() {
        const { statePropertyExample } = this.state;
        const { definitions } = this.props;
        return <View style={styles.definitions}>{definitions.map((definition, definitionIndex) => this.getTexts2(definition, definitionIndex))}</View>;
    }
}

const styles = StyleSheet.create({
    definitions: {
        maxWidth: '96%',
        minWidth: '96%',
    },
    hasNoLink: {
        color: 'black',
        textDecorationLine: 'none',
    },
    hasLink: {
        color: 'mediumblue',
        //textDecorationLine: 'underline',
    },
})