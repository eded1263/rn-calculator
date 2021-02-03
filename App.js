/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const App: () => React$Node = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const updateDisplay = (n) => {
    setDisplayValue(n);
  };

  const clearMemory = () => {
    setDisplayValue('0');
  };

  const setOperation = (operation) => {

  }
  return (
    <>
      <View style={styles.container}>
        <Display value={displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={clearMemory} />
          <Button label="/" operation onClick={setOperation} />
          <Button label="7" onClick={updateDisplay} />
          <Button label="8" onClick={updateDisplay} />
          <Button label="9" onClick={updateDisplay} />
          <Button label="*" operation onClick={setOperation} />
          <Button label="4" onClick={updateDisplay} />
          <Button label="5" onClick={updateDisplay} />
          <Button label="6" onClick={updateDisplay} />
          <Button label="-" operation onClick={setOperation} />
          <Button label="1" onClick={updateDisplay} />
          <Button label="2" onClick={updateDisplay} />
          <Button label="3" onClick={updateDisplay} />
          <Button label="+" operation onClick={setOperation} />
          <Button label="0" double onClick={updateDisplay} />
          <Button label="." onClick={updateDisplay} />
          <Button label="=" operation onClick={setOperation} />
        </View>
      </View>
    </>
  );
};

export default App;
