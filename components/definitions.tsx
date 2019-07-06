import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import classnames from 'classnames';

type TDefinitionsProps = {
    definitions: ({ definition: string, examples: string[], definition2: ({ word: string, id?: number })[], examples2: ({ word: string, id?: number }[])[] })[]
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

    getTexts2 = (definition: { definition2: any, examples2: any[] }) => {
        const { definition2, examples2 } = definition;
        return <Fragment key={Math.random()}>
            <Text key={Math.random()}>
                {definition2.map((item: { word: string; id: number; }, index: number) => {
                    return (
                        <Text key={Math.random()} style={item.id >= 0 ? styles.hasLink : styles.hasNoLink} onPress={(e) => this.onTextPress2(e, item)}>
                            {`${item.word}${index !== (definition2.length - 1) ? ' ' : ''}`}
                        </Text>
                    )
                })}
            </Text>
            {examples2 && examples2.length > 0 &&
                <Fragment key={Math.random()}>
                    {examples2.map((example: any[], index: number) => {
                        return <Text key={Math.random()}>{example.map((item: { word: string; id: number; }, index: number) => {
                            return (
                                <Text key={Math.random()} style={item.id >= 0 ? styles.hasLink : styles.hasNoLink} onPress={(e) => this.onTextPress2(e, item)}>
                                    {`${item.word}${index !== (examples2.length - 1) ? ' ' : ''}`}
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
        return <View style={styles.definitions}>{definitions.map(definition => this.getTexts2(definition))}</View>;
    }
}

const styles = StyleSheet.create({
    definitions: {
        minWidth: '96%',
        maxWidth: '96%',
    },
    hasNoLink: {
        textDecorationLine: 'none',
        color: 'black'
    },
    hasLink: {
        textDecorationLine: 'underline',
        color: 'mediumblue'
    },
})