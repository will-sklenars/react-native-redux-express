import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import DrinksGrid from '../DrinksGrid';

import styles from './Display.styles'

const Display = (props) => {

  const { fetchData, isLoading, drinks, hasErrored } = props;

  if (hasErrored) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>...you've had enough</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading…</Text>
      </View>
    )
  }

  if (drinks.length === 0) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={fetchData} style={styles.button}>
          <Text>Press Me!</Text>
        </TouchableOpacity>
      </View>
    )
  }    

  return (
    <DrinksGrid drinks={drinks}/>
  )

}

export default Display