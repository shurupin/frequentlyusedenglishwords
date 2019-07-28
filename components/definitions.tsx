import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type TDefinitionsProps = {
    definitions: ({ definition: string, examples: string[], d2: ({ w: string, id?: number })[], e2: ({ w: string, id?: number }[])[] })[],
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

    getTexts2 = (definition: { d2: any, e2: any[] }, definitionIndex: number) => {
        const { d2, e2 } = definition;
        const { handleWordClick } = this.props;
        return <Fragment key={Math.random()}>
            <Text key={Math.random()}>
                {d2.map((item: { w: string; id: number; }, index: number) => {
                    return (
                        <Text key={Math.random()} style={item.id != undefined && item.id != null && item.id >= 0 ? styles.hasLink : styles.hasNoLink} onPress={() => handleWordClick(item.id, item.w)}>
                            {`${item.w}`}
                        </Text>
                    )
                })}
            </Text>
            {e2 && e2.length > 0 &&
                <Fragment key={Math.random()}>
                    {e2.map((example: any[], index: number) => {
                        return <Text key={Math.random()}>{example.map((item: { w: string; id: number; }, index: number) => {
                            return (
                                <Text key={Math.random()} style={[item.id != undefined && item.id != null && item.id >= 0 ? styles.hasLink : styles.hasNoLink, {fontStyle: 'italic'}]} onPress={() => handleWordClick(item.id, item.w)}>
                                    {`${item.w}`}
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