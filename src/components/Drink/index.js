import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Drink.styles'

const DrinkComponent = (props) => {


  const {drink, onImageLoadEnd} = props

  const httpURL = drink.strDrinkThumb
  const httpsURL = `${httpURL.slice(0, 4)}s${httpURL.slice(4)}` // add in the 's'
                                                                // http url was not 
                                                                // working for me
                                                                
  return (
    <View key={drink.idDrink} style={styles.drinkContainer}>
      <Image
        style={styles.image}
        source={{uri: httpsURL}}
        onLoadEnd={onImageLoadEnd}
      />
      <Text key={drink.idDrink} style={styles.label}>
        {drink.strDrink}
      </Text>
      <View style={styles.line}/>
    </View>
  )
}

export default DrinkComponent