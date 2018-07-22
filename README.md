# react-native-number-enumerator

Animated label with number counting upwards to a specific number.

## Installation

````sh
    npm install react-native-number-enumeratorä
````

## Usage

From the example

````javascript
    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    import NumberEnumerator from 'react-native-number-enumerator'

    export default class App extends React.Component {
        render() {
            return (
            <View style={styles.container}>
                <NumberEnumerator text="$%s" value={280} interval={10} step={5} />
            </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
        },
    });

````

## Author

Alexander Forselius <alexander.forselius@buddhalow.com>

## License

MIT
