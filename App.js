/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperationState] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const setDisplay = (value) => {
    setDisplayValue(value);
  };

  const updateDisplay = (n) => {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }
    const displayIsClear = displayValue === '0' || clearDisplay;
    const currentValue = displayIsClear ? '' : displayValue;
    const displayText = currentValue + n;
    setDisplay(displayText);
    setClearDisplay(false);
    if (n !== '.') {
      const newValue = parseFloat(displayText);
      const valuesToSet = [...values];
      valuesToSet[current] = newValue;
      setValues(valuesToSet);
    }
  };

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperationState(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  const setOperation = (operationParam) => {
    if (current === 0) {
      setOperationState(operationParam);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = operationParam === '=';
      const valuesClone = [...values];
      // console.warn(valuesClone);

      try {
        // eslint-disable-next-line no-eval
        valuesClone[0] = eval(`${valuesClone[0]} ${operation} ${values[1]}`);
      } catch (e) {
        valuesClone[0] = values[0];
      }

      setDisplayValue(`${valuesClone[0]}`);
      setOperationState(equals ? null : operationParam);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(valuesClone);
    }
  };
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
