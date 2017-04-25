import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import DrinkComponent from '../Drink'

import styles from './DrinksGrid.styles'

function DrinksGrid(props) {

  const { drinks } = props

  const drinkElements = drinks.map((drink, i) => {
    return (
      <DrinkComponent
        drink={drink}
        key={drink.idDrink}
      />
    )
  })


  return (
    <ScrollView>
      <View
        style={styles.drinksContainer}>
        { drinkElements }
      </View>
    </ScrollView>
  )

}

export default DrinksGrid