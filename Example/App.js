import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NumberEnumerator from './NumberEnumerator'

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
